
import { ref } from "vue";
const pokemonCenterItems = [
  {
    name: "Poke Ball", 
    price: 200, 
    image: "https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball.png",
    purchase: ref(0)
  },
  {
    name: "Great Ball",
    price: 600,
    image: "https://static.wikia.nocookie.net/monster-master/images/9/95/Great_ball_by_peetzaahhh2010-d93nt17.png/revision/latest?cb=20170523123559",
    purchase: ref(0)
  },
  {
    name: "Ultra Ball",
    price: 1200,
    image: "https://seeklogo.com/images/U/ultraball-pokemon-logo-35E5B2B3B5-seeklogo.com.png",
    purchase: ref(0)
  },
  {
    name: "Master Ball",
    price: 10000,
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df8125x-c8cf4bb9-5308-41f5-9615-844b771b5556.png/v1/fill/w_1280,h_1281/transparent_master_ball_by_ace_zeroartic_df8125x-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGY4MTI1eC1jOGNmNGJiOS01MzA4LTQxZjUtOTYxNS04NDRiNzcxYjU1NTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MXMqCuBPI6nNBmTZqPjXTmYTejmmkYqo_qMnNxlM5Zc",
    purchase: ref(0)
  },
  {  
    name: "Potion",
    price: 300,
    image: "https://ghostwalker186.files.wordpress.com/2013/10/potion.png",
    purchase: ref(0)
  },
  {
    name: "Super Potion",
    price: 700,
    image: "https://static.wikia.nocookie.net/pokemonhonorglory/images/a/a3/Bag_Super_Potion_Sprite.png/revision/latest/thumbnail/width/360/height/360?cb=20210312173503",
    purchase: ref(0)
  },
  {
    name: "Hyper Potion",
    price: 1200,
    image: "https://static.wikia.nocookie.net/project-pokemon/images/5/55/HyperPotion.png/revision/latest/thumbnail/width/360/height/360?cb=20170106012054",
    purchase: ref(0)
  },
  {
    name: "Max Potion",
    price: 2500,
    image: "https://archives.bulbagarden.net/media/upload/thumb/8/85/GO_Max_Potion.png/200px-GO_Max_Potion.png",
    purchase: ref(0)
  },
  {
    name: "Full Restore",
    price: 3000,
    image: "https://static.wikia.nocookie.net/project-pokemon/images/8/83/FullRestore.png/revision/latest/thumbnail/width/360/height/360?cb=20170106012055",
    purchase: ref(0)
  },
  {
    name: "Revive",
    price: 1500,
    image: "https://static.wikia.nocookie.net/project-pokemon/images/1/13/Revive.png/revision/latest/thumbnail/width/360/height/360?cb=20170106012058",
    purchase: ref(0)
  },
  {
    name: "Max Revive",
    price: 4000, 
    image: "https://static.wikia.nocookie.net/pokemon/images/4/45/Dream_Max_Revive_Sprite.png/revision/latest/scale-to-width/360?cb=20110515174226",
    purchase: ref(0)
  },
  {
    name: "Rare Candy",
    price: 8000,
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1026f62-8ed3-4010-8b21-db1d8a8bd7ab/dbfisv8-f551ff9f-bd8b-409e-918b-939c8a91362d.png/v1/fill/w_1024,h_1010/rare_candy_png_by_chipflake_dbfisv8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMCIsInBhdGgiOiJcL2ZcL2IxMDI2ZjYyLThlZDMtNDAxMC04YjIxLWRiMWQ4YThiZDdhYlwvZGJmaXN2OC1mNTUxZmY5Zi1iZDhiLTQwOWUtOTE4Yi05MzljOGE5MTM2MmQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Qg361lVlKjp3W9PjdHJkjs4XyQUr1zdl2ta8Ijw7y_A",
    purchase: ref(0)  
  },
  {
    name: "PP Up",
    price: 9800,
    image: "https://www.serebii.net/itemdex/sprites/sv/ppup.png",
    purchase: ref(0)
  },
  {
    name: "PP Max",
    price: 9800,
    image: "https://www.serebii.net/itemdex/sprites/sv/ppmax.png",
    purchase: ref(0)
  },
  {
    name: "Full Heal",
    price: 600,
    image: "https://static.wikia.nocookie.net/pokemon/images/0/07/Dream_Full_Heal_Sprite.png/revision/latest/scale-to-width/360?cb=20120210144345",
    purchase: ref(0)
  },
  {
    name: "Escape Rope",
    price: 550,
    image: "https://static.wikia.nocookie.net/pokemon/images/c/c0/Dream_Escape_Rope_Sprite.png/revision/latest/scale-to-width/360?cb=20110823211111",
    purchase: ref(0)
  },
  {
    name: "Repel",
    price: 350,
    image: "https://static.wikia.nocookie.net/pokemon-uranium/images/5/5d/Bag_Repel_Sprite.png/revision/latest/thumbnail/width/360/height/360?cb=20150116025505",
    purchase: ref(0)
  },
  {
    name: "Super Repel",
    price: 500,
    image: "https://static.wikia.nocookie.net/smashtopia/images/b/b4/Super_Repel.png/revision/latest?cb=20230215023723" ,
    purchase: ref(0)
  },
  {
    name: "Max Repel",
    price: 700,
    image: "https://static.wikia.nocookie.net/pokemon/images/2/2d/Dream_Max_Repel_Sprite.png/revision/latest/scale-to-width/360?cb=20110815023409",
    purchase: ref(0)
  },
  {
    name: "Antidote",
    price: 100,
    image: "https://static.wikia.nocookie.net/project-pokemon/images/4/42/Dream_Antidote_Sprite.png/revision/latest/thumbnail/width/360/height/360?cb=20171108054053",
    purchase: ref(0)
  },
  {
    name: "Paralyze Heal",
    price: 200,
    image: "https://static.wikia.nocookie.net/pokemonhonorglory/images/a/ab/Bag_Paralyze_Heal_Sprite.png/revision/latest/thumbnail/width/360/height/360?cb=20210312173532",
    purchase: ref(0)
  },
  {
    name: "Awakening",
    price: 250,
    image: "https://static.wikia.nocookie.net/pokemon-uranium/images/8/8d/Bag_Awakening_Sprite.png/revision/latest/thumbnail/width/360/height/360?cb=20160819161532",
    purchase: ref(0)
  },
  {
    name: "Burn Heal",
    price: 250,
    image: "https://static.wikia.nocookie.net/pokemon/images/f/f4/Dream_Burn_Heal_Sprite.png/revision/latest/scale-to-width/360?cb=20110515175143",
    purchase: ref(0)
  },
  {
    name: "Ice Heal",
    price: 250,
    image: "https://static.wikia.nocookie.net/pokemon/images/2/2a/Dream_Ice_Heal_Sprite.png/revision/latest/scale-to-width/360?cb=20110515175248",
    purchase: ref(0)
  },
  {
    name: "X Attack",
    price: 500,
    image: "https://static.wikia.nocookie.net/pokemon/images/9/94/Dream_X_Attack.png/revision/latest/scale-to-width/360?cb=20110904081646",
    purchase: ref(0)
  },
  {
    name: "X Defense",
    price: 550,
    image: "https://www.serebii.net/itemdex/sprites/sv/xdefense.png",
    purchase: ref(0)
  },
  {
    name: "X Speed",
    price: 350,
    image: "https://www.serebii.net/itemdex/sprites/sv/xspeed.png",
    purchase: ref(0)
  },
  {
    name: "X Accuracy",
    price: 950,
    image: "https://www.gamerguides.com/assets/media/15/1355/item_0060.png",
    purchase: ref(0)
  },
  {
    name: "X Special Attack",
    price: 350,
    image: "https://shiny4u.com/storage/held-items-db/battle-effect-items/xspatk.png",
    purchase: ref(0)
  },
  {
    name: "X Special Defense",
    price: 350,
    image: "https://www.serebii.net/itemdex/sprites/sv/xsp.def.png",
    purchase: ref(0)
  },
  {
    name: "Dire Hit",
    price: 650,
    image: "https://www.serebii.net/itemdex/sprites/sv/direhit.png",
    purchase: ref(0)
  },
  {
    name: "Guard Spec",
    price: 700,
    image: "https://www.serebii.net/itemdex/sprites/sv/guardspec..png",
    purchase: ref(0)
  },
  {
    name: "Protein",
    price: 9800,
    image: "https://static.wikia.nocookie.net/pokemon-uranium/images/a/aa/Bag_Protein_Sprite.png/revision/latest/thumbnail/width/360/height/360?cb=20150208011835",
    purchase: ref(0)
  },
  {
    name: "Iron",  
    price: 9800,
    image: "https://www.serebii.net/itemdex/sprites/sv/iron.png",
    purchase: ref(0)
  },
  {
    name: "Calcium",
    price: 9800, 
    image: "https://www.serebii.net/itemdex/sprites/sv/calcium.png" ,
    purchase: ref(0)
  },
  {
    name: "Zinc",
    price: 9800,
    image: "https://www.serebii.net/itemdex/sprites/sv/zinc.png",
    purchase: ref(0)
  },
  {
    name: "Carbos",
    price: 9800,
    image: "https://www.serebii.net/itemdex/sprites/sv/carbos.png",
    purchase: ref(0)
  },
  {
    name: "HP Up",
    price: 9800, 
    image: "https://www.serebii.net/itemdex/sprites/sv/hpup.png",
    purchase: ref(0)
    
  }
];


export {pokemonCenterItems}