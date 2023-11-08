export default function NewCourse() {
    async function saveCourses() {
        "use server"
        console.log("acessou a função")
    }
    return (
        <div>
            <h1>Cadastrar Curso</h1>
            <form>
                <input  type="text" name="title" placeholder="Digite o Título do Curso"/><br></br>
                <input  type="text" name="descritpion" placeholder="Digite a Descrição do Curso"/><br></br>
                <input  type="text" name="url" placeholder="Digite a URL do Curso"/><br></br>
                <button formAction={saveCourses}>Salvar</button>
            </form>
        </div>
    )
}