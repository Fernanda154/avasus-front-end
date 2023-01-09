export type Credit = {
    titulo: string,
    capa: string
}
export type Course = {
    id: number
    cateroria: string,
    capa: string,
    titulo: string,
    parceiros: string,
    resumo: string,
    duracao: string,
    matriculados: number,
    criado_em: string,
    avaliacao: string,
    numero_avaliacoes: number,
    objetivo_geral: string,
    objetivo_especifico: string,
    conteudo: string[],
    creditos: Credit[]
    sobre: string,
    recursos_educacionais: string

}


export type Partner = {

    capa: string,
    id: number,
    titulo: string
}