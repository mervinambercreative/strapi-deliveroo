'use strict';

/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */

module.exports = {

  /**
   * Retrieve order records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.order.search(ctx.query);
    } else {
      return strapi.services.order.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a order record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.order.fetch(ctx.params);
  },

  /**
   * Count order records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.order.count(ctx.query);
  },

  /**
   * Create a/an order record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.order.add(ctx.request.body);
  },

  /**
   * Update a/an order record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.order.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an order record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.order.remove(ctx.params);
  },

  /**
   * Add relation to a/an order record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.order.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an order record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.order.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an order record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.order.removeRelation(ctx.params, ctx.request.body);
  }
};
