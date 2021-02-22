// setting up this client-side get to communicate with the get that we created on the server-side
// receiving the information that we're send to the client from the server
const populateCharactersTable = function(){
	$.ajax({
		method: 'GET',
		url: '/characters',
		success:function(res){
			res.data.forEach((character) => {
				const tr = $("<tr>");
				const nameTd = $("<td>");
				const speciesTd = $("<td>");
				const performedByTd = $("<td>");
				const descriptionTd = $("<td>");

				nameTd.text(character.name);
				speciesTd.text(character.species);
				performedByTd.text(character.performedBy);
				descriptionTd.text(character.description);

				tr.append(nameTd).append(speciesTd).append(performedByTd).append(descriptionTd);
				$(".characters-table").append(tr);
			})
		}
	});
}

// calling the function that i created above to get all of the sesame street characters
populateCharactersTable();
