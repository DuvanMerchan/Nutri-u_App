const { User, Post, Recipe, Ranking } = require("../../db");

const getAllPost = async (userId) =>{
    try {
        return await User.findByPk(userId, { include: Post } )
    } catch (error) {
        console.log(error)
    }}

const getRecipePost = async (recipeId) =>{
    try {
        let {posts} = await Recipe.findByPk(recipeId, { include: Post } )
        let post = []
        if(posts){
                await Promise.allSettled(    
                await posts.map( async( p)=>{
                let user = await User.findByPk(p.userId)
                post.push( {
                    username:user.dataValues.username,
                    post: p.dataValues,
                })}))
            return post
        }
    } catch (error) {
        console.log(error)
    }}

const createPost =async (userId, content,recipeId) =>{
    try {    
        let user = await User.findByPk(userId)
        let recipe = await Recipe.findByPk(recipeId)
        let newPost = await Post.create({
            content,
            userId,
            recipeId,})

         await user.addPost(newPost)
         await recipe.addPost(newPost)
        return await User.findByPk(userId, { include: Post } )
    } catch (error) {
        console.log(error)
    }}

const countRanking = async (recipeId) =>{
    try {
        let {count, rows} = await Ranking.findAndCountAll({
            where:{recipeId:recipeId}
        })
        let sum = 0
        rows.forEach(ele => {
            sum = sum + ele.dataValues.ranking
        });
        return sum/count

    } catch (error) {
        console.log(error)
    }
}

const addRanking =async (userId , recipeId, ranking) =>{
    try {
        let user = await User.findByPk(userId)
        let recipe = await Recipe.findByPk(recipeId)
            if (!user || !recipe) {
                throw new Error('need more data')
            }else{
                let newRanking = await Ranking.create({
                    ranking,
                    userId,
                    recipeId})
                await user.addRanking(newRanking)
                await recipe.addRanking(newRanking)
                return await Recipe.findByPk(recipeId, { include: Ranking } )
            }
    } catch (error) {
        console.log(error)
    }
}

const updatePost =async (postId,content) =>{
    try {
        let post = await Post.findByPk(postId)
        return await post.update({content:content})
    } catch (error) {
        console.log(error)
    }
}
const updateRanking =async (ranking, rankingId) =>{
    try {
        let rank = await Ranking.findByPk(rankingId)
        return await rank.update({ranking:ranking})
    } catch (error) {
        console.log(error)
    }
}
const deletePost =async (postId) =>{
    try {
        let post = await Post.findByPk(postId)
        await post.destroy()
        return('The post was delete') 
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    getAllPost,
    createPost,
    getRecipePost,
    addRanking,
    countRanking,
    updateRanking,
    updatePost,
    deletePost
}