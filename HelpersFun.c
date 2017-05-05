//
//  HelpersFun.c
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/4/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

#include "HelpersFun.h"

int insertBinaryFileIntoTableAndSubmit(MYSQL *connection, FILE *file, struct tableQueryData *queryData)
{
    char          query_buffer[1024*1024], binary_buffer[1024*10], *p;
    unsigned long file_length;
    int           status;
    int           binary_element_byte_size = 1;
    size_t        binary_element_count = sizeof (binary_buffer);
    
    /* begin creating an INSERT statement, adding the id value */
    sprintf (query_buffer,
             "INSERT INTO imagegallerydb (id,name,description,imageurl,thumbnail) VALUES ('%d','%s','%s','%s','",
             queryData->id,
             queryData->name,
             queryData->description,
             queryData->imageurl);
    
    printf("----> %s\n", queryData->name);
    printf("----> %s\n", queryData->imageurl);
    
    p = query_buffer + strlen (query_buffer);
    /* read data from file in chunks, encode each */
    /* chunk, and add to end of statement */
    while ( (file_length = fread (binary_buffer, binary_element_byte_size, binary_element_count, file)) > 0 )
    {
        /* don't overrun end of statement buffer! */
        if ( (p + (2*file_length) + 3) > (query_buffer + sizeof (query_buffer)) )
        {
            //print_error (NULL, "image is too big");
            printf("image is too big");
            return (1);
        }
        p += mysql_real_escape_string (connection, p, binary_buffer, file_length);
    }
    *p++ = '\'';
    *p++ = ')';
    status = mysql_real_query (connection, query_buffer, (unsigned long) (p - query_buffer));
    return (status);
    
}

void createBinaryFileQuery(struct databaseConfiguration *config, struct tableQueryData *queryData)
{
    // create db connection instance
    MYSQL *connection = mysql_init(NULL);
    
    // configure and initialize db
    if(mysql_real_connect(connection,
                          config->host,
                          config->user,
                          config->password,
                          config->database,
                          config->port,
                          config->unix_socket,
                          config->client_flag) == NULL) {
        fprintf(stderr, "%s\n", mysql_error(connection));
        mysql_close(connection);
        exit(1);
    }
    
    // open image file
    FILE *file = fopen(queryData->imageurl, "rb");
    
    if(file == NULL) {
        fputs ("File error",stderr); exit (1);
    }
    
    // do the deed
    insertBinaryFileIntoTableAndSubmit(connection, file, queryData);
}


void testDBQuery()
{
    struct databaseConfiguration config;
    config.host = "localhost";
    config.user = "root";
    config.password = "OB?A1a&-KGw1";
    config.database = "imagedb";
    config.port = 3306;
    config.unix_socket = NULL;
    config.client_flag = 0;
    
    struct tableQueryData tableData;
    tableData.id = 0;
    tableData.name = "HolyMolly!";
    tableData.description = "Cant believe this does not work.";
    tableData.imageurl = "/Users/sachamoo/temp/Pictures/Art/ideas/characters/thumbnails/sc00568231.jpg";
    tableData.thumbnail_path = "/Users/sachamoo/temp/Pictures/Art/ideas/characters/thumbnails/sc00568231.jpg";
    
    createBinaryFileQuery(&config, &tableData);
}
