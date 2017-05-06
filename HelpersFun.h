//
//  HelpersFun.h
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/4/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

#ifndef HelpersFun_h
#define HelpersFun_h

#include <stdio.h>
#include <OHMySQL/mysql.h>
#include <string.h>
#include "HelperTools.h"
#include <stdio.h>

#endif /* HelpersFun_h */

//struct dbConfiguration *db_config;
//struct tableQueryData *querydata;
// int insertBinaryFileIntoTableAndSubmit(MYSQL *connection, FILE *file, struct tableQueryData *queryData);
//void createBinaryFileQuery(struct dbConfiguration *config, struct tableQueryData *queryData);
struct tableQueryData data;
//void createBinaryFileQuery(struct queryData *data);
void createBinaryFileQuery( const char *host,
                           const char *user,
                           const char *password,
                           const char *database,
                           unsigned int port,
                           const char *unix_socket,
                           unsigned long client_flag);
static void testDBQuery();

//void set_data(char *host,
//              char *user,
//               char *password,
//              char *database,
//              int port,
//               char *socket,
//              int flag,
//               char *name,
//                char *description,
//               char *imageurl,
//                char *thumbnail_path);
//void set_database_configuration(const char *host,
//                                const char *user,
//                                const char *password,
//                                const char *database,
//                                int port,
//                                const char *socket,
//                                int flag);
void set_table_query_data(int id,
                          const char *name,
                          const char *description,
                          const char *imageurl,
                          const char *thumbnail_path);

