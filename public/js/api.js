var api = (function(){
    function fetchData(){
        return fetch("http://localhost:5000/data/testData.json",{
            method: 'GET',
        }).then(function(response) {
            if (response.status === 200 || response.status === 0) {
                return response.json();
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        });
    }

    return {
        fetchData: fetchData,
    }
})();
