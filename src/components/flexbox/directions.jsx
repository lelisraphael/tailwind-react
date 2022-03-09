const Directions = () => {

    // Flex-row e Flex-coll
    // Para inserir flex-box em um elemento é obrigatório que o pai conhenha a class flex

    return (
        <>
            <div className="flex flex-row bg-red-300">
                Flex Row
                <div className="bg-red-600 p-6 m-2">
                    1
                </div>
                <div className="bg-red-600 p-6 m-2">
                    2
                </div>
                <div className="bg-red-600 p-6 m-2">
                    3
                </div>
            </div>

            <div className="flex flex-col bg-blue-300">
                Flex Col
                <div className="bg-blue-600 p-6 m-2">
                    1
                </div>
                <div className="bg-blue-600 p-6 m-2">
                    2
                </div>
                <div className="bg-blue-600 p-6 m-2">
                    3
                </div>
            </div>


            <div className="flex flex-row-reverse bg-pink-300">
                Flex Row Reverse
                <div className="bg-pink-600 p-6 m-2">
                    1
                </div>
                <div className="bg-pink-600 p-6 m-2">
                    2
                </div>
                <div className="bg-pink-600 p-6 m-2">
                    3
                </div>
            </div>










        </>


    )

}
export default Directions