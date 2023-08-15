const api_url = "https://adri-w9-be.up.railway.app/transaction";

export default async function saveHTML(htmlId: Array<string|number>){
    const basket: Array<string|number> = [htmlId[0], htmlId[1], htmlId[2], htmlId[3], htmlId[4]]

    const response = await fetch(api_url, {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id:htmlId[0],
            type:htmlId[1],
            name:htmlId[2],
            detail:htmlId[3],
            amount:+htmlId[4]
        })
    }).then(function(response){
        return response.json;
    }).then(function(data){
        console.log(data);
    });
    alert("Transaction saved");
    location.reload();
}