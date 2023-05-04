const Citizen = require('../../../models/Citizen');
const User = require('../../../models/User');
const Proposal = require('../../../models/Proposal');

exports.createSuggestion = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;
    const suggestion = {
        title: req.body.title,
        goal: req.body.goal,
        scope: req.body.scope,
        advantages: req.body.advantages,
        description: req.body.description,
        email: req.body.email,
        citizen: userId,
    };
    
    try{
        const citizen = await Citizen.findById(userId);

        if(!citizen){
            return res.status(404).json({ error: 'user not found' });
        }else{
            if(currentUserRole === 'citizen'){
                const newSuggestion = await Proposal.create(suggestion);

                if(!newSuggestion){
                    return res.status(500).json({ error: 'create suggestion failed' });
                }

                return res.status(200).json({ newSuggestion });
            }else{
                return res.status(403).json({ error: 'access denied' });
            }
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getSuggestionsByUser = async (req, res) => {

    const user = res.locals.user;
    const userId = user._id;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'citizen'){
            const citizen = await Citizen.findById(userId);
            if(!citizen){
                return res.status(404).json({ error: 'user not found' });
            }

            const suggestions = await Proposal.find({citizen: userId});
            if(!suggestions){
                return res.status(200).json({message: 'no suggestions for the user'});
            }

            return res.status(200).json({ suggestions });
        }else{
            return res.status(403).json('access denied'); 
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getPendingSuggestion = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee'){
            const suggestions = await Proposal.find({status: 'pending'});

            if(suggestions === null){
                return res.status(200).json({ message: 'no pending suggestions available' });
            }

            return res.status(200).json({ suggestions });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.getReviewingSuggestions = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee'){
            const suggestions = await Proposal.find({status: 'reviewing'});

            if(suggestions == null){
                return res.status(200).json({ message: 'no reviewing suggestions available' });
            }

            return res.status(200).json({ suggestions });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.getAcceptedSuggestions = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee'){
            const suggestions = await Proposal.find({status: 'accepted'});

            if(suggestions == null){
                return res.status(200).json({ message: 'no accepted suggestions available' });
            }

            return res.status(200).json({ suggestions });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.getRejectedSuggestions = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'employee'){
            const suggestions = await Proposal.find({status: 'rejected'});

            if(!suggestions){
                return res.status(200).json({ message: 'no rejected suggestions available' });
            }

            return res.status(200).json({ suggestions });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.updateSuggestionStatus = async (req, res) => {
 
    const user = res.locals.user;
    const currentUserRole = user.role;
    const suggestionId = req.params.id;
    const suggestionStatus = req.body.status;

    try{
        if(currentUserRole === 'employee'){

            const suggestion = await Proposal.findById(suggestionId);
            if(!suggestion){
                return res.status(200).json({message: 'suggestion not available'});
            }

            //add pdf after implementing pdf upload feature
            const newSuggestionDetails = {
                title: suggestion.title,
                goal: suggestion.goal,
                scope: suggestion.scope,
                advantages: suggestion.advantages,
                description: suggestion.description,
                email: suggestion.email,
                status: suggestionStatus,
                citizen: suggestion.citizen,
                response: suggestion.response,
                date: suggestion.date
            };

            const updatedSuggestion = await Proposal.findOneAndUpdate(
                {_id: suggestionId },
                newSuggestionDetails,
                { new: true }
            );

            if(!updatedSuggestion){
                return res.status(400).json({error: 'suggestion update failed'});
            }

            return res.status(200).json({ updatedSuggestion });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.acceptSuggestion = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const suggestionId = req.params.id;
    const suggestionStatus = 'accepted';
    const suggestionResponse = req.body.response;

    try{
        if(currentUserRole === 'employee'){

            const suggestion = await Proposal.findById(suggestionId);
            if(!suggestion){
                return res.status(200).json({message: 'suggestion not available'});
            }

            //add pdf after implementing pdf upload feature
            const newSuggestionDetails = {
                title: suggestion.title,
                goal: suggestion.goal,
                scope: suggestion.scope,
                advantages: suggestion.advantages,
                description: suggestion.description,
                email: suggestion.email,
                status: suggestionStatus,
                citizen: suggestion.citizen,
                response: suggestionResponse,
                date: suggestion.date
            };

            const updatedSuggestion = await Proposal.findOneAndUpdate(
                {_id: suggestionId },
                newSuggestionDetails,
                { new: true }
            );

            if(!updatedSuggestion){
                return res.status(400).json({error: 'suggestion update failed'});
            }

            return res.status(200).json({ updatedSuggestion });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.rejectSuggestion = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;
    const suggestionId = req.params.id;
    const suggestionStatus = 'rejected';
    const suggestionResponse = req.body.response;

    try{
        if(currentUserRole === 'employee'){

            const suggestion = await Proposal.findById(suggestionId);
            if(!suggestion){
                return res.status(200).json({message: 'suggestion not available'});
            }

            //add pdf after implementing pdf upload feature
            const newSuggestionDetails = {
                title: suggestion.title,
                goal: suggestion.goal,
                scope: suggestion.scope,
                advantages: suggestion.advantages,
                description: suggestion.description,
                email: suggestion.email,
                status: suggestionStatus,
                citizen: suggestion.citizen,
                response: suggestionResponse,
                date: suggestion.date
            };

            const updatedSuggestion = await Proposal.findOneAndUpdate(
                {_id: suggestionId },
                newSuggestionDetails,
                { new: true }
            );

            if(!updatedSuggestion){
                return res.status(400).json({error: 'suggestion update failed'});
            }

            return res.status(200).json({ updatedSuggestion });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}

exports.getAllSuggestions = async (req, res) => {

    const user = res.locals.user;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'admin'){
            const suggestions = await Proposal.find({});

            if(suggestions == null){
                return res.status(200).json({ message: 'no suggestions available' });
            }

            return res.status(200).json({ suggestions });
        }else{
            return res.status(403).json({error: 'access denied'});
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({error:error.message})
    }

}

exports.deleteSuggestion = async (req, res) => {

    const user = res.locals.user;
    const suggestionId = req.params.id;
    const currentUserRole = user.role;

    try{
        if(currentUserRole === 'citizen' || currentUserRole === 'admin'){
            const suggestion = await Proposal.findById(suggestionId);
            if(!suggestion){
                return res.status(200).json({ error: 'suggestion not available' });
            }

            const deletedSuggestion = await Proposal.findOneAndDelete(suggestionId);
    
            if(!deletedSuggestion){
                return res.status(500).json('suggestion deletion failed');
            }
    
            return res.status(204).json({ deletedSuggestion });
        }else{
            return res.status(403).json('access denied');
        }
    }catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }

}