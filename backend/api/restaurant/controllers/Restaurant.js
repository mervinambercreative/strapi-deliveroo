'use strict';

/**
 * Restaurant.js controller
 *
 * @description: A set of functions called "actions" for managing `Restaurant`.
 */

module.exports = {

  /**
   * Retrieve restaurant records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.restaurant.search(ctx.query);
    } else {
      return strapi.services.restaurant.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a restaurant record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.restaurant.fetch(ctx.params);
  },

  /**
   * Count restaurant records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.restaurant.count(ctx.query);
  },

  /**
   * Create a/an restaurant record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.restaurant.add(ctx.request.body);
  },

  /**
   * Update a/an restaurant record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.restaurant.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an restaurant record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.restaurant.remove(ctx.params);
  },

  /**
   * Add relation to a/an restaurant record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.restaurant.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an restaurant record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.restaurant.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an restaurant record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.restaurant.removeRelation(ctx.params, ctx.request.body);
  }
};
