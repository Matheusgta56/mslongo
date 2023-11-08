export default function NewCourse() {
    return (
        <div>
            <h1>Cadastrar Curso</h1>
            <form>
                <input  type="text" placeholder="Digite o Título do Curso"/>
                <input  type="text" placeholder="Digite a Descrição do Curso"/>
                <input  type="text" placeholder="Digite a URL do Curso"/>
                <button>Salvar</button>
            </form>
        </div>
    )
}