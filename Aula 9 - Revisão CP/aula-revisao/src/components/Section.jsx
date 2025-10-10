export default function Section({ title, children }){
    return(
        <section>
            <h1>{title}</h1>
            <div className="grid col-5">
                {children}
            </div>
        </section>
    )
}