
class UserRolesAndClaims {
    /**
     * Provide a valid mongoose connection object that will be used to store application credentials
     * @constructor
     * @param mongoose A mongoose connection object
     */
    constructor(userRole, userClaim) {
        this.userClaim = userClaim;
        this.userRole = userRole;
    }

    async getAllUsersRoles(){
        try{
            let roles = await this.userRole.find({}).populate('role');
            return roles;
        }catch(err){
            return []
        }
    }

    async getAllUsersClaims(){
        try{
            let claim = await this.userClaim.find({}).populate('claim');
            return claim;
        }catch(err){
            return []
        }
    }
}

module.exports = UserRolesAndClaims;