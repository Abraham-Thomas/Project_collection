import categoryList from './categoryList'
Page({
    data: {  
    curNav: 0,
    categoryList: categoryList,
    
    
},
switchTab(e)
{
    console.log(e);
    let that = this
    that.setData({
        
        curNav:e.target.dataset.index,
        toView: e.target.dataset.id
    })
},

switchScroll(e)
{
    console.log(e);
    
},


})

