import React from 'react'

const Footer = ({ nombreEmpresa }) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-[#e0fbfc] flex justify-center box-border p-5">
      <p>
        {nombreEmpresa} &copy; {currentYear} Privacy Policy
      </p>
      {/* "&copy;" es el símbolo de copyright */}
    </div>
  )
}

export default Footer
