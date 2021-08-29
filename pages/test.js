export default function index() {
    return (
        <div>
            <nav className="bg-blue-500 p-3 flex justify-between px-14">
                <h1 className="text-xl text-white font-bold">Adi Munawar</h1>
                <ul className="flex justify-evenly">
                    <li className="mx-2 text-white font-semibold">Home</li>
                    <li className="mx-2 text-white font-semibold">About</li>
                    <li className="mx-2 text-white font-semibold">Contact</li>
                </ul>
            </nav>
            <div className="w-10/12 mx-auto border flex mt-20 flex-wrap justify-center">
                <div className="w-80 py-3 h-96 bg-gray-200 m-1 text-center">
                    <h1>1</h1>
                </div>
                <div className="w-80 py-3 h-96 bg-gray-300 m-1 text-center">
                    <h1>2</h1>
                </div>
                <div className="w-80 py-3 h-96 bg-gray-400 m-1 text-center">
                    <h1>3</h1>
                </div>
                <div className="w-80 py-3 h-96 bg-gray-500 m-1 text-center">
                    <h1>4</h1>
                </div>
                <div className="w-80 py-3 h-96 bg-gray-600 m-1 text-center">
                    <h1>5</h1>
                </div>
                <div className="w-80 py-3 h-96 bg-gray-700 m-1 text-center">
                    <h1>6</h1>
                </div>
            </div>
        </div>
    )
}
