import imagekit from "../config/imagekit.js";
import StartUp from "../models/startup.model.js";

export const addStartUp = async (req, res) => {
    try {
        const {name, description, tags, url} = req.body
        if (
            [name, description, url].some((field) => field.trim() === "")
        ){
            return res.status(400).json({
                success : false,
                message : 'All fields are required'
            })
        }

        const existingStartUp = await StartUp.findOne({name})

        if(existingStartUp){
            {
            return res.status(400).json({
                success : false,
                message : 'A startup with this name already exists'
            })
        }
        }

        const logo = req.file

        if(!logo){
            return res.status(400).json({
                success : false,
                message : 'Logo is required'
            })
        }

        const uploadedLogo = await imagekit.upload({
            file : logo.buffer,
            fileName : `${Date.now()}-${logo.originalname}`
        })

        const logoUrl = uploadedLogo.url

        const newStartUp = await StartUp.create({
            name, description, tags, logo : logoUrl, url
        })

        return res.status(201).json({
            success : true,
            message : "StartUp Added SuccessFully",
            data : newStartUp
        })

    } catch (error) {
        console.log("An error occured while adding startup" ,error.message)
        return res.status(500).json({
                success : false,
                message : 'An error occured'
            })
    }
}

export const getAllStartups = async (_, res) => {
    try {
        const startups = await StartUp.find({}).sort({createdAt : -1})
        return res.status(200).json({
            success : true,
            data : startups,
            message : "Startups fetched Successfully"
        })
    } catch (error) {
        console.log("Error while fetching all startups", error.message)
        return res.status(500).json({
        success: false,
        message: "An error occurred while fetching startups"
    });
    }
}

export const discoverStartups = async (req, res) => {
    try {
        const {input} = req.body
        if(!input){
            return res.status(200).json({ success: true, data: [], message: "No search input provided" });
        }
        const startups = await StartUp.find({
            $or : [
                {
                    name : new RegExp(input, 'i')
                },
                {
                    description : new RegExp(input, 'i')
                },
                {
                    url : new RegExp(input, 'i')
                },
                {
                    tags : {$in : [new RegExp(input, 'i')]}
                }
            ]
        })
    
        return res.status(200).json({
            success : true,
            data : startups,
            message : "Searched for startups successfully"
        })
    } catch (error) {
        console.log("An error occured while searching for startups",error.message)
        return res.status(400).json({
            success : false,
            message : "An error occured while searching"
        })
    }
}