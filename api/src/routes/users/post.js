const { Router } = require("express");
const { getAllPost, createPost,countRanking,  getRecipePost, addRanking, updatePost, updateRanking, deletePost } = require("../../controllers/usersControllers/PostRanking.controllers");
const router = Router()
const auth = require('../../middlewares/auth');

router.get('/:userId',auth,  async (req,res)=>{
    let {userId} = req.params
    let post = await getAllPost(userId)
    res.json(post)
})
router.post('/:userId',auth,  async (req,res)=>{
    let {userId} = req.params
    let {content,  recipeId} = req.body
    let post = await createPost(userId, content, recipeId)
    res.json(post)
})
router.get('/recipe/:recipeId', async (req,res)=>{
    let {recipeId} = req.params
    let post = await getRecipePost(recipeId)
    res.json(post)
})
router.get('/reciperank/:recipeId', auth, async (req,res)=>{
    let {recipeId} = req.params
    let rank = await countRanking(recipeId)
    res.json(rank)
})
router.patch('/post/:postId', auth, async (req,res)=>{
    let {postId} = req.params
    let {content} = req.body
    let post = await updatePost(postId,content)
    res.json(post)
})
router.post('/ranking/:recipeId', auth, async (req,res)=>{
    let {recipeId} = req.params
    let {ranking, userId} = req.body
    let rank = await addRanking(userId , recipeId, ranking)
    res.json(rank)
})
router.patch('/up-ranking', auth, async (req,res)=>{
    let {ranking, rankingId} = req.body
    let rank = await updateRanking(ranking, rankingId)
    res.json(rank)
})
router.delete('/post/:postId', auth, async (req,res)=>{
    let {postId} = req.params
    console.log('postId',postId)
    let post = await deletePost(postId)
    res.json(post)
})



module.exports = router;