//função construtora de objetos Produto
class Livro {
	static listaLivros = [];
	static livro = [];

	constructor(titulo, descricao, genero, autor) {
		this.titulo = titulo;
		this.descricao = descricao;
		this.genero = genero;
		this.autor = autor;
	}

	
}
$(function(){
	$("#adicionar").click(function(){
		var tituloLivro = $("#titulo").val();
		var autores = $("#autores").val();
		var estilo = $("#estilo").val();
		var descricao = $("#descricao").val();

		$("#acervo").append(
				$("<tr>")
					.append($("<td>").text(tituloLivro))
					.append($("<td>").text(autores))
					.append($("<td>").text(estilo))
					.append($("<td>").text(descricao))
					.append($("<td>")
						.append($("<a>")
								.attr("href", "#")
								.text("Apagar"))
					)
		)

		let livro = new Livro(tituloLivro, autores, estilo, descricao);
		Livro.listaLivros.push(livro)
		limpar()
	});
    
    function limpar(){
	$("#titulo").val("");
	$("#descricao").val("");
	$("#autores").val("");
	$("#estilo").val("");
}

	$("#acervo").on("click", "a", function(){
		$(this).parents("tr").remove();
		Livro.livro = [];
		for(let i =0; i < $(this).parents("tr").find('td').length-1; i++){
			Livro.livro.push($(this).parents("tr").find('td')[i].innerHTML);
		}

		let index = Livro.listaLivros.findIndex(Livro.checkIfSame)
		Livro.listaLivros.splice(index,1)
	})

	$("#excluir").click(limpar)

	$("#apagarAcervo").click(function(){
		Livro.listaLivros = [];
		$("#acervo").empty();
		$("#acervo")
			.append($("<tr>")
						.append($("<th>").text("Título"))
						.append($("<th>").text("Autores"))
						.append($("<th>").text("Estilo"))
						.append($("<th>").text("Descrição"))
					)
	})

	$("#enviar").click(function(){
		let url = "http://httpbin.org/post";
		console.log(Livro.listaLivros)
		$.post(url, Livro.listaLivros, function(data,status){
			console.log(data)
			alert("Data: " + data + "\nStatus: " + status);
		  }
		);
	})
});