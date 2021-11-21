import fetch from 'node-fetch';


const data = {"a": "#include<bits/stdc++.h>\nusing namespace std;\nint main() {\n cout<<2;\n}"};

const response = await fetch('http://localhost:3001', {
	method: 'post',
	body: JSON.stringify(data),
	headers: {'Content-Type': 'application/json'}
});
//const data2 = await response.json();
//console.log(data2);
