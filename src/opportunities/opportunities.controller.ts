import { Body, Controller, Param, Post, Get, Res, ValidationPipe, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { Opportunities } from 'src/dto-schema/opportunities.dto';
import { OpportunitiesService } from './opportunities.service';
import { Response } from 'express';


@Controller('opportunities')
export class OpportunitiesController {
    constructor(
        private readonly opprtunitiesServices: OpportunitiesService,
    ) { }

    @Post('create')
    async createOpportunity(
        @Body(new ValidationPipe()) opportunities: Opportunities,
        @Res() res: Response,
    ) {
        try {
            return await this.opprtunitiesServices.addOpportunity(opportunities, res);
        } catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    }

    // @Get(':id')
    // async getOpportunity(@Param('id', new ParseIntPipe()) id: number) {
    //     return id;
    // }

    @Get()
    async getOpportunities(@Res() res: Response,) {
        try {
            return await this.opprtunitiesServices.getOpportunities(res);
        } catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    }

}
