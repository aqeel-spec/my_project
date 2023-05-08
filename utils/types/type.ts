interface StorageData {
    total : number , 
     files : {
         $createdAt : string,
         $id : string,
         bucketId : string,
         mimeType : string,
         name : string,
         signature : string,
         sizeOriginal : number
     }[]
 };
 interface ListData {
    total : number , 
    documents : { 
        Item_name : string , $collectionId : string ,
        $createdAt : string,
        $databaseId  : string,
        $id : string 
    }[]
}