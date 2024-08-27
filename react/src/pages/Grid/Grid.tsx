import React from "react"
import "./grid.css"

const Grid: React.FC = () => {
    return (
        <>
            <header className="item1">
                <ul>
                    <li>
                        <a href="#" id="item-1">Menu</a>
                    </li>
                    <li>
                        <a href="#" id="item-2">Main</a>
                    </li>
                    <li>
                        <a href="#" id="item-4">Section</a>
                    </li>
                    <li>
                        <a href="#" id="item-3">Footer</a>
                    </li>
                    <li>
                        <a href="#" id="item-6">Grid Template
                            <code className="code-used">
                                grid-template-areas:
                                'header header header header header header'
                                'menu main main main right right'
                                'menu footer footer footer footer footer';
                            </code>
                        </a>
                    </li>
                </ul>
            </header>

            <section className="item2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptate beatae laboriosam rem
                    voluptates, dolorem numquam, dolorum illum, et repudiandae expedita perspiciatis quae asperiores ipsam
                    sint. Culpa fuga voluptate eligendi!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum animi quisquam dicta dolor aspernatur
                    nobis officia eveniet dolores explicabo sit at, quo est delectus quis ducimus rerum architecto vel eum.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat voluptatum similique
                    molestiae, veniam saepe necessitatibus mollitia voluptas cumque deserunt accusamus iste. Necessitatibus
                    cum unde ad officiis dolores repellat nesciunt!</p>
            </section>

            <main className="item3">
                <p>You know how we can create responsive design with display grid?</p>
                <img src="//picsum.photos/200/200" alt="Random Image" />
            </main>
            <section className="item4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quos quibusdam in deserunt quas
                    obcaecati temporibus aliquam reprehenderit itaque totam. Ullam officiis eius ducimus veniam? Totam odit
                    nobis ratione! Esse?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui est deserunt nesciunt dolores pariatur et
                    mollitia omnis, molestiae quidem voluptatum quasi natus sint porro. Similique eum sit odio. Obcaecati,
                    atque.</p>
            </section>
            <footer className="item5">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sapiente et animi error corrupti,
                    sint nihil neque iusto repudiandae accusantium exercitationem porro quam illum corporis dolor vero ad
                    non? Ex.</p>
            </footer>
        </>
    )
}

export default Grid