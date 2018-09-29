exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('jobs').del()
      .then(function () {
        // Inserts seed entries
        return knex('jobs').insert([
          {name: 'Lighthouse Labs Reno', address: '5994 Boehm Road', job_number: 26181, active: true, company_id: 1, date_created: new Date("Fri Sep 21 2018 20:37:39 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 20:37:39 GMT-0700 (PDT)").toISOString()},
          {name: 'Whitley Court', address: '45876 Ralph Parks', job_number: 8374, active: true, company_id: 1, date_created: new Date("Fri Sep 21 2018 20:37:39 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 00:09:03 GMT-0700 (PDT)").toISOString()},
          {name: 'Viatec Basement', address: '3433 West Crest', job_number: 1979, active: false, company_id: 1, date_created: new Date("Fri Sep 21 2018 20:37:39 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 05:46:40 GMT-0700 (PDT)").toISOString()},
          {name: 'Summit Building', address: '534 Hugh Terrace', job_number: 91661, active: false, company_id: 1, date_created: new Date("Fri Sep 21 2018 20:37:39 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 05:30:26 GMT-0700 (PDT)").toISOString()},
          {name: 'BC Place', address: '81551 Olson Fords', job_number: 7370, active: false, company_id: 1, date_created: new Date("Fri Sep 21 2018 20:37:39 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 03:35:02 GMT-0700 (PDT)").toISOString()},
          {name: 'Saddledome', address: '129 Bode Burg', job_number: 86596, active: false, company_id: 1, date_created: new Date("Sun Jun 03 2018 19:48:24 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 18:01:35 GMT-0700 (PDT)").toISOString()},
          {name: 'Church on Club', address: '8197 Antonio Club', job_number: 7651, active: false, company_id: 1, date_created: new Date("Sun Dec 17 2017 09:33:37 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 01:04:45 GMT-0700 (PDT)").toISOString()},
          {name: 'Whitespot', address: '202 Grady Extensions', job_number: 62807, active: false, company_id: 1, date_created: new Date("Sun Feb 25 2018 00:54:31 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 23:29:09 GMT-0700 (PDT)").toISOString()},
          {name: 'Jett St. Parkade', address: '897 Jett St.', job_number: 35601, active: false, company_id: 1, date_created: new Date("Sat Apr 21 2018 08:51:13 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 03:46:40 GMT-0700 (PDT)").toISOString()}
          // {name: 'JobName 10', address: '6545 McClure View', job_number: 95553, active: false, company_id: 1, date_created: new Date("Fri Nov 03 2017 15:59:11 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 16:09:48 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 11', address: '844 Pacocha Dale', job_number: 1554, active: false, company_id: 1, date_created: new Date("Thu Sep 13 2018 08:46:43 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 02:06:17 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 12', address: '41665 Robyn Camp', job_number: 18600, active: false, company_id: 1, date_created: new Date("Thu Jan 25 2018 02:02:03 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 23:06:39 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 13', address: '85113 Mackenzie Avenue', job_number: 75055, active: false, company_id: 1, date_created: new Date("Thu Feb 01 2018 00:24:03 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 18:13:00 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 14', address: '010 Metz Branch', job_number: 48998, active: false, company_id: 1, date_created: new Date("Wed Jul 18 2018 01:30:20 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 08:20:00 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 15', address: '3155 Jakob Lane', job_number: 29698, active: false, company_id: 1, date_created: new Date("Mon Sep 17 2018 15:49:55 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 02:01:26 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 16', address: '89009 Wilhelmine Trail', job_number: 9575, active: false, company_id: 1, date_created: new Date("Wed Jun 06 2018 14:56:10 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 21:10:55 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 17', address: '1602 Kuhlman Bridge', job_number: 53264, active: false, company_id: 1, date_created: new Date("Thu Jan 04 2018 16:03:23 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 11:47:03 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 18', address: '955 Fredy Freeway', job_number: 93788, active: false, company_id: 1, date_created: new Date("Mon Jul 16 2018 22:09:24 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 10:56:14 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 19', address: '597 Roob Canyon', job_number: 8204, active: false, company_id: 1, date_created: new Date("Mon Jan 22 2018 16:18:45 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 07:30:40 GMT-0700 (PDT)").toISOString()},
          // {name: 'JobName 20', address: '197 Amalia Meadow', job_number: 19549, active: false, company_id: 2, date_created: new Date("Sun Sep 02 2018 20:18:05 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 18:06:17 GMT-0700 (PDT)").toISOString()}
        ]);
      });
  };