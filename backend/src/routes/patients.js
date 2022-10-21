const express = require('express');

const PatientsService = require('../services/patients');
const PatientsDBApi = require('../db/api/patients');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Patients:
 *        type: object
 *        properties:

 *          first_name:
 *            type: string
 *            default: first_name
 *          last_name:
 *            type: string
 *            default: last_name
 *          date_of_birth:
 *            type: string
 *            default: date_of_birth
 *          email:
 *            type: string
 *            default: email
 *          gender:
 *            type: string
 *            default: gender
 *          residential_suburb:
 *            type: string
 *            default: residential_suburb
 *          state:
 *            type: string
 *            default: state
 *          medicare_reference_Number:
 *            type: string
 *            default: medicare_reference_Number
 *          IHI_Number:
 *            type: string
 *            default: IHI_Number
 *          residential_street_address:
 *            type: string
 *            default: residential_street_address
 *          preferred_pharmacy:
 *            type: string
 *            default: preferred_pharmacy
 *          preferred_pharmacy_address:
 *            type: string
 *            default: preferred_pharmacy_address
 *          preferred_pharmacy_suburb:
 *            type: string
 *            default: preferred_pharmacy_suburb
 *          Preferred_pharmacy_email:
 *            type: string
 *            default: Preferred_pharmacy_email
 *          private_health_insurance:
 *            type: string
 *            default: private_health_insurance
 *          occupation:
 *            type: string
 *            default: occupation
 *          concession_card_holder:
 *            type: string
 *            default: concession_card_holder
 *          notes:
 *            type: string
 *            default: notes

 *          
 *          
 *          
 */

/**
 *  @swagger
 * tags:
 *   name: Patients
 *   description: The Patients managing API
 */

/**
 *  @swagger
 *  /api/patients:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patients]
 *      summary: Add new item
 *      description: Add new item
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                data:
 *                  description: Data of the updated item
 *                  type: object
 *                  $ref: "#/components/schemas/Patients"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Patients"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        405:
 *          description: Invalid input data
 *        500:
 *          description: Some server error
 */

router.post('/', async (req, res) => {
  await PatientsService.create(
    req.body.data,
    req.currentUser,
    true,
    req.headers.referer,
  );
  const payload = true;
  res.status(200).send(payload);
});

/**
 *  @swagger
 *  /api/patients/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patients]
 *      summary: Update the data of the selected item
 *      description: Update the data of the selected item
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Item ID to update
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *        description: Set new item data
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                id:
 *                  description: ID of the updated item
 *                  type: string
 *                data:
 *                  description: Data of the updated item
 *                  type: object
 *                  $ref: "#/components/schemas/Patients"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Patients"
 *        400:
 *          description: Invalid ID supplied
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Item not found
 *        500:
 *          description: Some server error
 */

router.put(
  '/:id',
  wrapAsync(async (req, res) => {
    await PatientsService.update(req.body.data, req.body.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 * @swagger
 *  /api/patients/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patients]
 *      summary: Delete the selected item
 *      description: Delete the selected item
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Item ID to delete
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The item was successfully deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Patients"
 *        400:
 *          description: Invalid ID supplied
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Item not found
 *        500:
 *          description: Some server error
 */

router.delete(
  '/:id',
  wrapAsync(async (req, res) => {
    await PatientsService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/patients:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patients]
 *      summary: Get all patients
 *      description: Get all patients
 *      responses:
 *        200:
 *          description: Patients list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Patients"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */

router.get(
  '/',
  wrapAsync(async (req, res) => {
    const payload = await PatientsDBApi.findAll(req.query);

    res.status(200).send(payload);
  }),
);

router.get('/autocomplete', async (req, res) => {
  const payload = await PatientsDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/patients/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patients]
 *      summary: Get selected item
 *      description: Get selected item
 *      parameters:
 *        - in: path
 *          name: id
 *          description: ID of item to get
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Selected item successfully received
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Patients"
 *        400:
 *          description: Invalid ID supplied
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Item not found
 *        500:
 *          description: Some server error
 */

router.get(
  '/:id',
  wrapAsync(async (req, res) => {
    const payload = await PatientsDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
