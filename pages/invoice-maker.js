import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { jsPDF } from 'jspdf'
import { FaDownload, FaPlus, FaTrash } from 'react-icons/fa'

export default function InvoiceMaker() {
  const [invoice, setInvoice] = useState({
    invoiceNumber: '001',
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientAddress: '',
    items: [{ description: '', quantity: 1, rate: 0 }],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInvoice({ ...invoice, [name]: value })
  }

  const handleItemChange = (idx, field, value) => {
    const newItems = [...invoice.items]
    newItems[idx][field] = field === 'quantity' || field === 'rate' ? parseFloat(value) || 0 : value
    setInvoice({ ...invoice, items: newItems })
  }

  const addItem = () => {
    setInvoice({
      ...invoice,
      items: [...invoice.items, { description: '', quantity: 1, rate: 0 }]
    })
  }

  const removeItem = (idx) => {
    setInvoice({
      ...invoice,
      items: invoice.items.filter((_, i) => i !== idx)
    })
  }

  const calculateTotal = () => {
    return invoice.items.reduce((sum, item) => sum + (item.quantity * item.rate), 0)
  }

  const downloadPDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    
    // Header
    doc.setFillColor(57, 255, 20)
    doc.rect(0, 0, pageWidth, 30, 'F')
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(24)
    doc.text('INVOICE', pageWidth / 2, 20, { align: 'center' })
    
    // Invoice details
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10)
    doc.text(`Invoice #: ${invoice.invoiceNumber}`, 20, 45)
    doc.text(`Date: ${invoice.date}`, 20, 55)
    doc.text(`Due Date: ${invoice.dueDate}`, 20, 65)
    
    // Company info
    doc.setFontSize(12)
    doc.text('FROM:', 20, 85)
    doc.setFontSize(10)
    doc.text('Charles n Charge', 20, 95)
    doc.text('1708 W Euclid Ave, Marion, IN 46952', 20, 105)
    doc.text('765-661-6867', 20, 115)
    
    // Client info
    doc.setFontSize(12)
    doc.text('BILL TO:', pageWidth / 2 + 20, 85)
    doc.setFontSize(10)
    doc.text(invoice.clientName, pageWidth / 2 + 20, 95)
    doc.text(invoice.clientAddress, pageWidth / 2 + 20, 105)
    doc.text(invoice.clientPhone, pageWidth / 2 + 20, 115)
    doc.text(invoice.clientEmail, pageWidth / 2 + 20, 125)
    
    // Table header
    doc.setFillColor(57, 255, 20)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(11)
    doc.text('Description', 20, 145)
    doc.text('Qty', 120, 145)
    doc.text('Rate', 150, 145)
    doc.text('Amount', 180, 145)
    
    // Table rows
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10)
    let y = 160
    invoice.items.forEach(item => {
      doc.text(item.description, 20, y)
      doc.text(item.quantity.toString(), 120, y)
      doc.text(`$${item.rate.toFixed(2)}`, 150, y)
      doc.text(`$${(item.quantity * item.rate).toFixed(2)}`, 180, y)
      y += 10
    })
    
    // Total
    y += 10
    doc.setFillColor(57, 255, 20)
    doc.rect(150, y - 5, 50, 10, 'F')
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(12)
    doc.text('TOTAL:', 180, y + 2, { align: 'right' })
    doc.text(`$${calculateTotal().toFixed(2)}`, 200, y + 2, { align: 'right' })
    
    doc.save(`invoice-${invoice.invoiceNumber}.pdf`)
  }

  return (
    <>
      <Head>
        <title>Invoice Maker - Charles n Charge</title>
      </Head>
      <Header />
      
      <section className="bg-dark-bg min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold neon-glow mb-12 text-center">Invoice Maker</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-dark-secondary p-8 rounded-lg border-2 border-neon-green">
                <h2 className="text-2xl font-bold mb-6 text-neon-green">Invoice Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <input
                    type="text"
                    name="invoiceNumber"
                    placeholder="Invoice Number"
                    value={invoice.invoiceNumber}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                  />
                  <input
                    type="date"
                    name="date"
                    value={invoice.date}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                  />
                  <input
                    type="date"
                    name="dueDate"
                    value={invoice.dueDate}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-neon-green">Client Information</h3>
                <div className="space-y-4 mb-8">
                  <input
                    type="text"
                    name="clientName"
                    placeholder="Client Name"
                    value={invoice.clientName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                  />
                  <input
                    type="email"
                    name="clientEmail"
                    placeholder="Client Email"
                    value={invoice.clientEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                  />
                  <input
                    type="tel"
                    name="clientPhone"
                    placeholder="Client Phone"
                    value={invoice.clientPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                  />
                  <textarea
                    name="clientAddress"
                    placeholder="Client Address"
                    value={invoice.clientAddress}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-neon-green">Line Items</h3>
                <div className="space-y-4">
                  {invoice.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Description"
                        value={item.description}
                        onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                        className="flex-1 px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                      />
                      <input
                        type="number"
                        placeholder="Qty"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)}
                        className="w-20 px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                      />
                      <input
                        type="number"
                        placeholder="Rate"
                        value={item.rate}
                        onChange={(e) => handleItemChange(idx, 'rate', e.target.value)}
                        className="w-24 px-4 py-3 bg-dark-bg border-2 border-neon-green rounded text-white"
                      />
                      <button
                        onClick={() => removeItem(idx)}
                        className="px-4 py-3 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={addItem}
                  className="mt-4 btn-outline-neon flex items-center gap-2"
                >
                  <FaPlus /> Add Item
                </button>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-dark-secondary p-8 rounded-lg border-2 border-neon-green h-fit">
              <h2 className="text-2xl font-bold mb-6 text-neon-green">Summary</h2>
              <div className="space-y-4 mb-8">
                {invoice.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.description}</span>
                    <span className="text-neon-green font-bold">${(item.quantity * item.rate).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-neon-green pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">TOTAL:</span>
                  <span className="text-3xl font-bold text-neon-green">${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={downloadPDF}
                className="btn-neon w-full flex items-center justify-center gap-2"
              >
                <FaDownload /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
