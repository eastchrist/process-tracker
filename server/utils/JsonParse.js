

module.exports = {
    options: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].options) {
                modifs.rows[i].options = JSON.parse( modifs.rows[i].options );
            }
        }
        return modifs
    },
}
