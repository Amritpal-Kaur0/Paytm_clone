export  default function  Button({label,onClick}) {
    return <button 
     type="button" onClick={onClick} className=" w-full text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-4 focus:ring-gray-300  font-thick rounded-xl text-sm px-5 py-3 me-2 mb-2">{label}</button>
}