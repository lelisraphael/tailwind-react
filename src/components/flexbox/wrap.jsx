const Wrap = () => {


    return (
        <>
            <div className="flex flex-wrap bg-red-300">
                <div className="bg-red-400 p-6 m-3">1</div>
                <div className="bg-red-500 p-6 m-3">2</div>
                <div className="bg-red-600 p-6 m-3">3</div>
                <div className="bg-red-700 p-6 m-3">4</div>
                <div className="bg-red-800 p-6 m-3">5</div>
                <div className="bg-red-900 p-6 m-3">6</div>
            </div>

            <div className="flex container bg-green-400 p-8">
                <div className="flex-1 bg-green-800">1</div>
                <div className="flex-1 bg-green-600">2</div>
                <div className="flex-none bg-green-200">3</div>
            </div>
        </>
    )
}
export default Wrap