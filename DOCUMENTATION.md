# Estrutura do Projeto

## Diretório de Imagens (`./public/Imagens`)
Este diretório armazena todos os elementos visuais essenciais utilizados na interface do projeto, como componentes de formulários, botões e ícones.

- **`lupa.png`**: Utilizada em todas as barras de pesquisa para representar a função de busca.
- **`botao-scroll.png` e `botao-scroll-direita.png`**: Imagens idênticas, porém com orientações diferentes, facilitando a aplicação em botões de rolagem em diversas direções no site.
- **`estrela.png` e `borda-estrela.png`**: Ícones usados em todos os botões de favoritar. Foram otimizados para uma resolução maior, garantindo uma melhor experiência visual.
- **`favicon.ico`**: Arquivo de ícone utilizado pelo navegador para exibir o logotipo do site na aba do navegador.

## Estrutura de Páginas e Componentes (`./src`)
Este diretório contém todas as páginas e componentes que formam a estrutura principal do projeto.

- **`./src/app`**: Armazena todos os componentes que representam as páginas do site. Cada componente corresponde a uma parte específica da interface visual.

## Modelos e Serviços
Os modelos e serviços do projeto estão organizados em diretórios separados e nomeados respectivamentes:

- **Modelos**: Definições de estrutura de dados que representam as entidades usadas no projeto.
- **Serviços**: Contêm a lógica de negócios e a comunicação com APIs ou outras fontes de dados.

## Armazenamento de Favoritos com `localStorage`
O projeto utiliza o `localStorage` para gerenciar o armazenamento de refeições favoritas. A função `addFavoriteHTTP` é responsável por adicionar ou remover uma refeição dos favoritos.

```typescript
addFavoriteHTTP(id: string, image: string, name: string) {
  const meal = id + '*' + image + '*' + name;
  if (localStorage.getItem(id)) {
    localStorage.removeItem(id);
  } else {
    localStorage.setItem(id, meal);
  }
}
```
## Menu Inicial com Categorias Aleatórias
Anteriormente, o menu inicial do projeto utilizava uma categoria fixa como exemplo; agora, o menu exibe uma categoria aleatória a cada vez que a página é carregada.

```typescript
this.category = this.categories[this.getRandomCategory(this.categories.length)];
```
