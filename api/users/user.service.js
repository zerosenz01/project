const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstName, lastName, gender, email, password,number,status,ID_organization,organization,owner,agency) 
                values(?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.permission,
        data.ID_organization,
        data.organization,
        data.owner,
        data.agency,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  addOrganizationMain: (data, callBack) => {
    pool.query(
      `insert into organization(name, permission, status, byid, byname,address,telephone) 
                values(?,?,?,?,?,?,?)`,
      [
        data.name,
        5,
        "Supporter 2",
        0,
        "สำนักงานควบคุมโรค",
        data.address,
        data.telephone,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  addOrganizationSub: (data, callBack) => {
    pool.query(
      `insert into organization(name, permission, status, byid, byname,address,telephone) 
                values(?,?,?,?,?,?,?)`,
      [
        data.name,
        4,
        "Supporter 1",
        data.byid,
        data.byname,
        data.address,
        data.telephone,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  addOrganizationHospital: (data, callBack) => {
    pool.query(
      `insert into organization(name, permission, status, byid, byname,address,telephone) 
                values(?,?,?,?,?,?,?)`,
      [
        data.name,
        3,
        "Operator Foreman Superviser",
        data.byid,
        data.byname,
        data.address,
        data.telephone,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select * from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserOrganizations: (id, callBack) => {
    pool.query(
      `select * from registration where organization = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPermission: (id, callBack) => {
    pool.query(
      `select * from status where permission < ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOrganizationByID: (id, callBack) => {
    pool.query(
      `select * from organization where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOrganizationByName: (id, callBack) => {
    pool.query(
      `select * from organization where name = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByPermission: (data, callBack) => {
    pool.query(
      `select * from registration where status < ? and ID_organization = ?`,
      [data.permission, data.owner],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select * from registration where delete_user = 0 ORDER BY status DESC`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOrganizations_all: (callBack) => {
    pool.query(
      `select * from organization ORDER BY status DESC`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatePassword: (data, callBack) => {
    pool.query(
      `update registration set password=? where id = ?`,
      [data.password, data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set firstName=?, lastName=?, gender=?, email=?, number=?,status=?,ID_organization=?,organization=?,agency=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.number,
        data.permission,
        data.ID_organization,
        data.organization,
        data.agency,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateProfiles: (data, callBack) => {
    pool.query(
      `update registration set firstName=?, lastName=?, gender=?, email=?, number=?,status=?,ID_organization=?,organization=? ,agency=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.number,
        data.permission,
        data.ID_organization,
        data.organization,
        data.agency,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateOrganization_main: (data, callBack) => {
    pool.query(
      `update organization set name=?,address=?,telephone=? where id = ?`,
      [data.name, data.address, data.telephone, data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateOrganization_sub: (data, callBack) => {
    pool.query(
      `update organization set name=?, byname=?,byid=?,address=?,telephone=? where id = ?`,
      [
        data.name,
        data.byname,
        data.byid,
        data.address,
        data.telephone,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updatedeleteUser: (data, callBack) => {
    pool.query(
      `update registration set delete_user = 1 where id = ?`,
      [data],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteOrganization: (data, callBack) => {
    pool.query(
      `delete from organization where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getOrganizations: (data, callBack) => {
    pool.query(
      `select * from organization where permission <= ? and byid = ?`,
      [data.permission, data.byid],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOrganizationsByPermission: (id, callBack) => {
    pool.query(
      `select * from organization where permission = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOrganizationsByID: (id, callBack) => {
    pool.query(
      `select * from organization where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getStatus: (callBack) => {
    pool.query(`select * from status`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
};
