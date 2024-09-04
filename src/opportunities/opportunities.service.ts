import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Opportunities } from 'src/dto-schema/opportunities.dto';
import { Response } from 'express';


@Injectable()
export class OpportunitiesService {
    constructor(
        private readonly prisma: PrismaClient,
    ) { }

    async addOpportunity(datas: Opportunities, res: Response) {
        try {
            const response = await this.prisma.opportunity.create({
                data: {
                    title: datas.title,
                    description: datas.description,
                    type: datas.type,
                    sector: datas.sector,
                    target: datas.target,
                    advantages: datas.advantages,
                    selectionProcess: datas.selectionProcess,
                    dueDate: datas.dueDate,
                    duration: datas.duration,
                    location: datas.location,
                    application_link: datas.applicationLink
                }
            });
            if (response) {
                res.status(201).json({ message: '✅ Opportunity created successfully', ...response });
            }
        } catch (e) {
            console.log(e)
        }
    }

    async getOpportunities(res: Response) {
        try {
            const response = await this.prisma.opportunity.findMany();
            if (response) {
                res.status(200).json(response);
            }
        } catch (e) {
            console.log(e)
        }
    }
}
