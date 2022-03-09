const Zindex = () => {

    return (
        <div className="container relative">
            <div className="bg-blue-300 h-10 w-10 p-6 absolute z-10">1</div>
            <div className="bg-red-900 h-10 w-10 p-6 absolute z-20 m-2">2</div>
            <div className="bg-red-600 h-10 w-10 p-6 absolute z-30 m-4">3</div>
        </div>
    )
}
export default Zindex