import { useState } from "react";
import { itensInicio } from "./Data/intem.js";

export default function App(){
    const [items, setItems] = useState(itensInicio);

    return(
        <main>
            <header>
                <h1>
                    carros hehheheheheheheheh
                </h1>
            </header>
            
            <section>
                {
                    items.map(item => (
                        <p>
                           {item.id} <br />
                           {item.title} <br />
                           <img src={item.imga} alt = {item.title} /> <br />
                           {item.description} <br />
                        </p>
                    ))
                }
            </section>
        </main>
    )
}