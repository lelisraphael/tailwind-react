const BoxSizing = () => {

    return (
        <div className="container mx-auto">
            <div className="container border-2 border-purple-900 bg-green-200 m-4 border-box p-10">
                <p>Border Box</p>
                *Respeita a largura total com paddings e margins
            </div>

            <div className="container bg-blue-200 border-2 border-purple-900 m-4 box-content p-10">
                <p>Border Content</p>
                *soma os paddings e margins
            </div>
        </div>
    )

}
export default BoxSizing