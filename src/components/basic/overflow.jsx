const Overflow = () => {

    return (
        <div className="container mx-auto">
            <div className="overflow-hidden h-16 bg-red-300 m-2">
                <p> Overflow hidden</p>
                <p> Overflow hidden</p>
                <p> Overflow hidden</p>
                <p> Overflow hidden</p>
            </div>

            <div className="overflow-auto h-16 bg-blue-300 m-2">
                <p> Overflow hidden</p>
                <p> Overflow hidden</p>
                <p> Overflow hidden</p>
                <p> Overflow hidden</p>
            </div>

            <div className="overflow-y-auto h-16 bg-red-300 m-2">
                <p> Overflow y</p>
                <p> Overflow y</p>
                <p> Overflow y</p>
                <p> Overflow y</p>
            </div>


            <div className="overflow-x-auto h-16 bg-blue-300 m-2">
                <p> OverflowOverflowOverflowOverflowOverflowOverflowOverflowOverflowOverflowOverflowOverflowOverflowOverflowOverflow</p>
          
            </div>

        </div>
    )
}
export default Overflow