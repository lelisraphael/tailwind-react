const Display = () => {

    // Display inline block faz que o elemento seja colocado ao lado de elementos com a mesma classe de display block
    // O hidden esconde a div é similiar ao display-none

    return (
        <div className="container mx-auto">
            <span className="block bg-blue-900"> block</span>
            <span className="block bg-green-900"> block</span>

            <span className="inline-block bg-red-900 p-2 m-2"> inline-block</span>
            <span className="inline-block bg-green-900 p-2 m-2"> inline-block</span>

            <span className="inline-block bg-red-900 p-2 m-2"> inline-block</span>
            <span className="inline-block bg-green-900 p-2 m-2 hidden"> inline-block</span>
        </div>
    )
}
export default Display