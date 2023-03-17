const saveData = (data) => {
    if(data['bName']==="" || data['bSName']==="" || data['fromDate']==="" || data['toDate']===""){
        console.log("Empty");
        return false;
    }
    const oldData = JSON.parse(localStorage.getItem("Product-Data"));
    if(oldData === null) {
        const newData =  [data]
        localStorage.setItem('Product-Data', JSON.stringify(newData));
    } else {
        const newData = []
        for(let i=0; i<oldData.length; i++){
            newData.push(oldData[i]);
        }
        newData.push(data)
        localStorage.setItem('Product-Data', JSON.stringify(newData));
    }
    return true;
    
};

const displayData = () => {
    const data = JSON.parse(localStorage.getItem("Product-Data"));
    return data;
}

export {
    saveData,
    displayData
}