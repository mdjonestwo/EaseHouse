import Pallet from "./models"
import vm from v-response

exports.creat_pallet = (req, res, next) => {
    let pallet_body = req.body;
    const new_pallet = new Pallet(pallet_body);
    new_pallet.save()
        .then( saved => {
            if(!saved){
                return res.status(400)
                    .json(vm.ApiResponse(fales, 400, "unable to save product please try again"))
            }
            if(saved){
                return res.status(201)
                    .json(vm.ApiResponse(fales, 201, "product created successfully", saved))
            }
        }).catch(  error =>{
            return res.status(500)
            .json(vm.ApiResponse(false, 500, "opps", undefined, error))
        }) 
}