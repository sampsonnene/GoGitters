# sequelize model:generate --name user \
#   --attributes firstName:string,lastName:string,email:string,password:string

# sequelize model:generate --name articles \
#   --attributes url:string

# sequelize model:generate --name comments \
#   --attributes comment:string,userID:integer,articleID:integer

sequelize model:generate --name articles \
  --attributes title:string,description:text,url:string