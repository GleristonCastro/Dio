# Primeiro Exercício

O objetivo deste exercício é praticar a criação do primeiro repositório usando GIT no GITHUB, aproveitei e utilizei as técnicas que "não conhecia" do Markdown, estarei demonstrando em pesquisa que fiz e de acordo com o conteúdo proposto. Incluir formatação mais adequada possível com meus conhecimentos.

[![logo-DIO.webp](https://i.postimg.cc/G3XL7dZL/logo-DIO.webp)](https://www.dio.me/)

#### Este reposiório contém

- Exercício 1: Primeiro repositório GIT

#### Comandos principais do GIT

**INIT**
Utilizamos o init para inicializar em um repositório local o GIT, ao efetuar o comando a seguir, é adicionado em uma pasta oculta /.git todas as informações de versionamentos e configurações.

```sh
$git init
```

**CONFIG**
Com o git config podemos configurar informações que são recorrentes no **push**, no caso de uso do SSH o user.email e user.name podem ser previamente configurados para não haver recorrentes solicitações.

```sh
git config --global user.email "seuemail@email.com"
git config --global user.name "UsuárioGitHub"
```

**ADD**
O add é responsável após criação/modicação/exclusão de arquivos e/ou pastas preparar para o Commit e assim adicionar no versionamento do repositório local.

```sh
git add
```

**COMMIT**
O comando commit permite adicionar ao repositório final a versão final antes do **push** (envio para o repositório remoto).

```sh
git commit -m "Aqui coloca uma mensagem do que foram feiras as alterações com objetivade"
```

_Caso seja necessário explirar com mais detalhes, é recomendado colocar no README.md_

**PUSH**
Quando todo o conteúdo passar pelo o commit, ele está "pronto" para ser enviado via PUSH para o repositório remoto.

```sh
git push origin main /
```
_/O origin por convesão é o nome dado a origem do servidor remoto, main ou master é o nome dado por convesão o repositório local._

**PULL**
O comando inveso PULL é responsável por baixar do repositório remoto a versão mais recente para seu repositório local.
Quando há necessidade de resolver conflitos, as mesmas linhas de códigos editadas por devs destintos. O Git recomenda uma revisão, o próprio GIT fará referências as linhas com atenção maior.

```sh
git pull origin master
```

**CLONE**
O Clone é responsável por clonar como o próprio sugere, é criado uma cópia de qualquer repositório disponível por exemplo no github, no qual você poderá alterar o código clonado em seu repositório local.

```sh
git clone http://url.com/qualquerCoisa.git
```

### Links de referência

| Conteúdo | Leia Mais |
| ------ | ------ |
| Aulas | [DIO](https://dio.me) - DIO |
| Host de Imagem | [Postimages](https://postimages.org/) - postimage |
| Editor Markdown | [Dillinger](https://dillinger.io/) - Dillinger |
| Documentação | [Markdownguide](https://www.markdownguide.org/basic-syntax/) - Markdown Guide |