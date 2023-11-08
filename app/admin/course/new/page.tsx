export default function NewCourse() {
    async function saveCourses() {
        "use server"
        console.log("acessou a função")
    }
    return (
        <div>
            <h1 className="text-xl border-b py-8">Cadastrar Curso</h1>
            <form>
                <input  type="text" name="title" placeholder="Digite o Título do Curso"/><br></br>
                <input  type="text" name="descritpion" placeholder="Digite a Descrição do Curso"/><br></br>
                <input  className="py-4" type="text" name="url" placeholder="Digite a URL do Curso"/><br></br>
                <button formAction={saveCourses} className="text-[#F56A6A] text-xl text-center bg-white border-2 border-[#F56A6A] px-5 py-[3px] py-8">Salvar</button>
            </form>
        </div>
    )
}