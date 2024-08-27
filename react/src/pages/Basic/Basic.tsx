import Form from "../../components/Form/Form.tsx"
import "./basic.css"
const Basic = () => {
    return (
        <>
            <section>

                <figure>
                    <Form />
                    <img src="images/html.png" alt="here gonna have a image" height="auto" width="300" />
                </figure>
            </section>

            <section className="hours-table">
                <h2>Table with some hours about my className</h2>
                <table id="hours">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Weednesday</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>6pm</td>
                        </tr>
                    </thead>
                </table>
            </section>

            <section className="favorite-websites" id="websites">
                <h2>my favorite websites</h2>
                <div>
                    <a href="https://mgtechbr.com/">MG Tech</a>
                    <a href="https://wedevup.com.br/">We Dev Up</a>
                </div>
            </section>

            <footer>
                <a href="https://github.com/matheusmartinsviana">&copy;Matheus Martins Viana 2024</a>
            </footer>
        </>
    )
}

export default Basic