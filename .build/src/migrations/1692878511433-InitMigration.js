"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitMigration1692878511433 = void 0;
const typeorm_1 = require("typeorm");
class InitMigration1692878511433 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'routes',
                columns: [
                    {
                        name: 'uuid',
                        type: 'varchar(36)',
                        default: '(UUID())',
                    },
                    { name: 'departureCity', type: 'varchar', isNullable: false },
                    { name: 'destinationCity', type: 'varchar', isNullable: false },
                    { name: 'distance', type: 'int', isNullable: false },
                    { name: 'departureDate', type: 'datetime', isNullable: false },
                    { name: 'executionDate', type: 'datetime', isNullable: false },
                    { name: 'requiredTransportType', type: 'varchar', isNullable: false },
                    { name: 'expectedRevenue', type: 'int', isNullable: false },
                    { name: 'transportId', type: 'varchar', isNullable: true },
                    { name: 'status', type: 'varchar', isNullable: false },
                ],
            }));
            yield queryRunner.query('ALTER TABLE `routes` ADD PRIMARY KEY(`uuid`);');
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'transport',
                columns: [
                    {
                        name: 'uuid',
                        type: 'varchar(36)',
                        default: '(UUID())',
                    },
                    { name: 'licensePlate', type: 'varchar', isNullable: false },
                    { name: 'status', type: 'varchar', isNullable: false },
                    { name: 'model', type: 'varchar', isNullable: false },
                    { name: 'acquisitionDate', type: 'date', isNullable: false },
                    { name: 'mileage', type: 'int', isNullable: false },
                    { name: 'transportType', type: 'varchar', isNullable: false },
                    { name: 'routeId', type: 'varchar', isNullable: true },
                ],
            }));
            yield queryRunner.createForeignKey('transport', new typeorm_1.TableForeignKey({
                columnNames: ['routeId'],
                referencedTableName: 'routes',
                referencedColumnNames: ['uuid'],
                onDelete: 'SET NULL',
            }));
            yield queryRunner.query(`
      INSERT INTO routes (uuid, departureCity, destinationCity, distance, departureDate, executionDate, requiredTransportType, expectedRevenue, transportId, status)
      VALUES
        ('d3d2e7e2-7ef7-4a37-86f7-a4f6474d0942', 'City A', 'City B', 100, '2023-08-01', '2023-08-10', 'cargo', 1000, 'private', 'waiting'),
        ('eb0c8c1a-2a71-4e62-884b-e06a00b50c8e', 'City B', 'City C', 150, '2023-08-02', '2023-08-11', 'passenger', 1200, 'passenger', 'ongoing');
    `);
            yield queryRunner.query(`
            INSERT INTO transport (licensePlate, status, model, acquisitionDate, mileage, transportType, routeId)
            VALUES
                ('ABC123', 'free', 'Model A', '2023-08-01', 10000, 'cargo', 'd3d2e7e2-7ef7-4a37-86f7-a4f6474d0942'),
                ('XYZ789', 'busy', 'Model B', '2023-08-02', 8000, 'passenger', 'eb0c8c1a-2a71-4e62-884b-e06a00b50c8e');
        `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('routes');
            yield queryRunner.dropTable('transport');
        });
    }
}
exports.InitMigration1692878511433 = InitMigration1692878511433;
//# sourceMappingURL=1692878511433-InitMigration.js.map