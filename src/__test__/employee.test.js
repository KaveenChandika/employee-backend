const request = require('supertest');
const app = require('../../server');

describe('Employee Controller', () => {
    // Assuming your Express app is properly configured and has routes for these functions

    // Test getEmployees endpoint
    it('should get a list of employees', async () => {
        const response = await request(app).get('/employees');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    // Test getEmployeeById endpoint
    it('should get an employee by ID', async () => {
        const id = 'your-employee-id'; // Replace with a valid employee ID
        const response = await request(app).get(`/employees/${id}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name'); // Replace 'name' with an actual property in your employee model
    });

    // Test addEmployees endpoint
    it('should add a new employee', async () => {
        const newEmployee = {
            name: 'John Doe',
            // Add other properties based on your employee model
        };

        const response = await request(app).post('/employees').send(newEmployee);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name', newEmployee.name);
    });

    // Test updateEmployee endpoint
    it('should update an employee', async () => {
        const id = 'your-employee-id'; // Replace with a valid employee ID
        const updatedEmployee = {
            name: 'Updated Name',
            // Add other properties based on your employee model
        };

        const response = await request(app).put(`/employees/${id}`).send(updatedEmployee);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name', updatedEmployee.name);
    });

    // Test deleteEmployee endpoint
    it('should delete an employee', async () => {
        const id = 'your-employee-id'; 
        const response = await request(app).delete(`/employees/${id}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('deletedCount', 1);
    });
});
