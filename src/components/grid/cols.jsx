const Cols = () => {

    return (
        <>
            Número de Colunas
            <div className="grid bg-red-300 grid-cols-3">
                <div className="bg-red-600 p-2 m-3">1</div>
                <div className="bg-red-600 p-2 m-3">2</div>
                <div className="bg-red-600 p-2 m-3">3</div>
                <div className="bg-red-600 p-2 m-3">4</div>
                <div className="bg-red-600 p-2 m-3">5</div>
                <div className="bg-red-600 p-2 m-3">6</div>
                <div className="bg-red-600 p-2 m-3">7</div>
                <div className="bg-red-600 p-2 m-3">8</div>
                <div className="bg-red-600 p-2 m-3">9</div>
            </div>
            col-span-x

            <div className="grid grid-cols-6 m-2">
                <div className="col-span-6 bg-red-600" >Header</div>
                <div className="col-span-1 bg-yellow-500">
                    <ul>
                        <li> 1 </li>
                        <li> 2 </li>
                        <li> 3 </li>
                        <li> 4 </li>
                        <li> 5 </li>
                    </ul>
                </div>
                <div className="col-span-4 bg-blue-400">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices in orci nec volutpat. Maecenas dignissim ligula a ex efficitur faucibus. Vestibulum quis neque lorem. Duis in nunc eget nunc hendrerit viverra at bibendum ligula. In eget tortor lobortis, feugiat ex vel, tempor ex. Vivamus in aliquam nibh, vel dictum felis. Aliquam neque tortor, tincidunt vel facilisis id, sagittis in ligula. Phasellus quis ligula commodo, consequat lacus eu, dictum enim. Pellentesque fringilla felis eget risus suscipit tristique.
                        Maecenas tempor egestas mi id convallis. Maecenas semper venenatis diam, sit amet cursus tortor luctus nec. Nullam porttitor facilisis mauris, vitae molestie velit blandit et. Maecenas iaculis convallis ex ac pretium. Nam id turpis eget nisi aliquet congue. Nam vulputate semper enim a pharetra. Aliquam non tempor dolor, non dictum risus.
                    </p>
                </div>
                <div className="col-span-1 bg-black text-white">
                    Lateral Direita
                </div>
                <div className="col-span-6 bg-red-600" >Footer</div>
            </div>
        </>
    )
}
export default Cols