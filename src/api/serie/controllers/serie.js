"use strict";

/**
 *  serie controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::serie.serie", ({ strapi }) => ({
  async update(ctx) {
    const currentUserId = ctx.state.user.id;
    ctx.request.body.data.user = currentUserId;
    const { data, meta } = await super.update(ctx);
    return { data, meta };
  },
}));
