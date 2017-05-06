//
//  HelperTools.h
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/5/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

#ifndef HelperTools_h
#define HelperTools_h

#include <stdio.h>

#endif /* HelperTools_h */

struct tableQueryData {
    int id;
    const char *name;
    const char *description;
    const char *thumbnail_path;
    const char *imageurl;
};

//struct dbConfiguration {
//    const char *host;
//    const char *user;
//    const char *password;
//    const char *database;
//    int port;
//    const char *unix_socket;
//    int client_flag;
//};



//typedef struct databaseConfiguration DB_CONFIGURATION;
typedef struct tableQueryData TABLE_QUERY_DATA;
