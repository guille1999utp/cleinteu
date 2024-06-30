import React, { use } from 'react';
import { FormContext } from '@/src/context/FormContext';
import {  Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import TextFields from '../../Inputs/TextField';
import SelectInput from '../../Inputs/Selects';
import CheckBoxYesNo from '../../Inputs/CheckBoxYesNo';
import InputFile from '../../Inputs/InputFiles';
import { countries, typeOfPerson, typeOfDocument } from '@/src/utils/variables';
import getCitiesByCountry from '@/src/utils/getCountries';
import DynamicTable from '../components/basicInfo/partners';
import FinalBeneficiary from '../components/basicInfo/finalBeneficiary';
import Representante from '../components/basicInfo/representante';

export default function BasicInfo() {

    const { control, errors,setValue, watch } = React.useContext(FormContext);

    const [typePerson, setTypeOfPerson] = React.useState();
    const [cities, setCities] = React.useState([]);
    const [pep, setPep] = React.useState(false);

    const onCountries =  (city) => {
        getCitiesByCountry(city).then((data) => {
            const countries = data.map((item) => item.state_name);
            setCities(countries);
        });
    }
    
    return (

        <Grid container spacing={2}>
            
            <Grid item xs={12}>
                <Typography variant="h4" fontWeight={600} component="h3" sx={{ color: "#002663" }}>
                    Informacion Basica
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <SelectInput
                    name="type_person"
                    label="Tipo de persona"
                    idLabel={"type_person"}
                    defaultValue={""}
                    control={control}
                    error={errors.type_person}
                    list={typeOfPerson}
                    fullWidth
                    customOnChange={(value)=>{
                        if(value === "Persona Natural") {
                            setValue("partners_info_contact", [])
                            setValue("contact_final_beneficiary", [])
                            setValue("representante", [])
                        }else{
                            setValue("name", "")
                            setValue("lastname", "")
                            setValue("genre", "")
                        }
                        
                        setTypeOfPerson(value)
                    }}
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <SelectInput
                    name="identification_type"
                    label="Tipo de identificación"
                    idLabel={"identification_type"}
                    defaultValue={""}
                    control={control}
                    error={errors.identification_type}
                    list={typeOfDocument}
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="No de identificación"
                    name="identification_number"
                    size="small"
                    type="number"
                    error={errors.nombre}
                    control={control}
                    fullWidth

                />
            </Grid>
            {typePerson == "Persona Jurídica" ? <Grid item xs={12}>
                <TextFields
                    label="Razon Social"
                    name="razon_social"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid> : null}
            {typePerson == "Persona Natural" ? <><Grid item xs={4}>
                <TextFields
                    label="Nombres"
                    name="name"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid>
                <Grid item xs={4}>
                    <TextFields
                        label="Apellidos"
                        name="lastname"
                        size="small"
                        error={errors.nombre}
                        control={control}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                <SelectInput
                    label="Genero"
                    name="genre"
                    defaultValue={""}
                    idLabel={"genre"}
                    control={control}
                    error={errors.genre}
                    list={["Masculino","Femenino" ]}
                    fullWidth
                    size="small"
                />
            </Grid></> : null}
            <Grid item xs={4}>
                <TextFields
                    label="Dirección"
                    name="direction"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth

                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Teléfono"
                    name="phone"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth

                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Email"
                    name="email"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                    type="email"
                />
            </Grid>
            {typePerson == "Persona Jurídica" ?    
             <Grid item xs={4}>
                <TextFields
                    label="Tipo de empresa"
                    name="type_company"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid> : null}
            <Grid item xs={4}>
                <TextFields
                    label="Cód. CIIU"
                    name="code_ciiu"
                    size="small"
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
            <SelectInput 
                name="country"
                label="País"
                defaultValue={""}
                idLabel={"TI"}
                customOnChange={(value)=>{onCountries(value)}}
                control={control}
                error={errors.country}
                list={countries}
                fullWidth
                size="small"
            />
            </Grid>
            <Grid item xs={4}>
                <SelectInput 
                    name="city"
                    label="Ciudad"
                    defaultValue={""}
                    idLabel={"city"}
                    control={control}
                    error={errors.city}
                    list={cities}
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <SelectInput
                    label="País de Constitución"
                    name="country_constitution"
                    idLabel={"country_constitution"}
                    control={control}
                    error={errors.country_constitution}
                    defaultValue={""}
                    list={countries}
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={12}>
                <TextFields
                    label="Actividad económica"
                    name="economic_activity"
                    size="small"
                    multiline
                    rows={4}
                    error={errors.nombre}
                    control={control}
                    fullWidth
                />
            </Grid>
            {typePerson == "Persona Jurídica" ?
                <> <Grid item xs={12}>
                    <Typography variant="h4" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                        Informacion de Contacto
                    </Typography>
                </Grid>
                    <Grid item xs={12}>
                        <Typography variant="p" fontWeight={600} component="p" sx={{ color: "#002663" }}>
                            Contacto 1
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextFields
                            label="Nombre contacto"
                            name="name_contact_1"
                            size="small"
                            error={errors.name_contact_1}
                            control={control}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextFields
                            label="No. Teléfono"
                            name="phone_contact_1"
                            type="number"
                            size="small"
                            error={errors.phone_contact_1}
                            control={control}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextFields
                            label="E-mail Cargo"
                            name="email_contact_1"
                            size="small"
                            type="email"
                            error={errors.email_contact_1}
                            control={control}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextFields
                            label="Cargo"
                            name="charge_contact_1"
                            size="small"
                            error={errors.charge_contact_1}
                            control={control}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="p" fontWeight={600} component="p" sx={{ color: "#002663" }}>
                            Contacto 2
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextFields
                            label="Nombre contacto"
                            name="name_contact_2"
                            size="small"
                            error={errors.name_contact_2}
                            control={control}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextFields
                            label="No. Teléfono"
                            name="phone_contact_2"
                            type="number"
                            size="small"
                            error={errors.phone_contact_2}
                            control={control}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextFields
                            label="E-mail Cargo"
                            name="email_contact_2"
                            size="small"
                            type="email"
                            error={errors.email_contact_2}
                            control={control}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextFields
                            label="Cargo"
                            name="charge_contact_2"
                            size="small"
                            error={errors.charge_contact_2}
                            control={control}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                            INFORMACIÓN REPRESENTANTES LEGALES: PRINCIPALES Y SUPLENTES <br />
                            (En caso de requerir más espacio debe anexar esta información)
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>
                                            <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                                Tipo de identificación
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                                No. Identificación
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                                Nombre y Apellidos
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                               <Representante control={control} errors={errors}/>
                            </Table>
                        </TableContainer>
                    </Grid></> : null}


            <Grid item xs={12}>
                <Typography variant="h4" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    Informacion Financiera
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Ingresos"
                    name="income"
                    type="number"
                    size="small"
                    error={errors.income}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Egresos"
                    name="expenses"
                    type="number"
                    size="small"
                    error={errors.expenses}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Otros ingresos"
                    name="other_income"
                    size="small"
                    type="number"
                    error={errors.other_income}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextFields
                    label="Concepto otros ingresos"
                    name="concept_other_income"
                    size="small"
                    multiline
                    rows={4}
                    error={errors.concept_other_income}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Activo"
                    name="active"
                    type="number"
                    size="small"
                    error={errors.active}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Pasivo"
                    name="liabilities"
                    type="number"
                    size="small"
                    error={errors.liabilities}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <TextFields
                    label="Patrimonio"
                    name="heritage"
                    type="number"
                    size="small"
                    error={errors.heritage}
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Realiza transacciones en moneda extranjera"
                    name="foreign_currency_transactions"
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Importaciones"
                    name="imports"
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Exportaciones"
                    name="exports"
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Inversiones"
                    name="investments"
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Productos financieros en el exterior"
                    name="financial_products_abroad"
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Transferencias en el exterior"
                    name="transfers_abroad"
                    control={control}
                    fullWidth
                />
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    Declaraciones
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <p>
                    El proveedor/cliente/beneficiario de pago declara bajo la gravedad de juramento que hasta la fecha de suscripción de este documento, él y sus beneficiarios reales, matrices, filiales, subsidiarias o afiliadas, accionistas, representantes legales,
                    miembros de junta directiva:
                </p>
                <ol>
                    <li>
                        No están incluidos en ninguna lista nacional o extranjera para para el control del lavado de activos, sus delitos conexos, financiación del terrorismo y financiamiento de la proliferación de armas de destrucción masiva (LA/FT/FPADM),
                        soborno, corrupción pública o privada
                    </li>
                    <li>
                        No han incurrido o participado a cualquier titulo o en cualquier modalidad, en prácticas, actos, omisiones o delitos relacionados directa o indirectamente con soborno ni corrupción pública o privada.
                    </li>
                    <li>
                        No han sido declarados responsables judicialmente por la comisión de algún delito contra la administración pública, o delito relacionado con la pertenencia, promoción o financiación de grupos ilegales, delitos de lesa humanidad, soborno transnacional, corrupción pública o privada ni ningún delito fuente del lavado de activos.
                    </li>
                    <li>
                        No han sido señalados por la prensa nacional o extranjera o por ningún medio de comunicación nacional o extranjero, de haber incurrido o participado a cualquier título y en cualquier modalidad, en prácticas, actos, omisiones o delitos relacionados directa o indirectamentecon corrupción pública o privada,soborno transnacional ni ningún delito fuente del lavado de activos.
                    </li>
                    <li>
                        No han sido, ni están siendo investigados, condenados y/o sancionados por ninguna autoridad nacional o extranjera, por haber incurrido o participado en prácticas, actos, omisiones o delitos relacionados directa o indirectamente con corrupción pública o privada, soborno, lavado de activos,sus delitos conexos,financiación del terrorismo y financiamiento de la proliferación de armas de destrucción masiva (LA/FT/FPADM)
                    </li>
                    <li>
                        No ha autorizado, ofrecido, prometido, dado o autorizado nada de valor (incluyendo pagos de facilitación) a ningún tercero o funcionario público nacional o extranjero.
                    </li>
                    <li>
                        Han tomado y tomarán en todo momento durante la vigencia de la relación comercial, todas las medidas necesarias para prevenir que cualquiera de sus empleados, contratistas, administradores, apoderados, mandatarios, representantes legales cualquier otra persona sujeta a su control, incurra en cualquiera de las conductas mencionadas.
                    </li>
                    <li>
                        La información suministrada es auténtica y veraz, por lo tanto, autoriza para verificarla a través de los medios que BENKY considere convenientes. Igualmente se obliga de manera irrevocable a actualizar anualmente los datos reportados en este formulario y los demás que se consideren necesarios, sin perjuicio de su obligación de informar a BENKY dentro de los ocho (8) días calendario siguientes a la ocurrencia del hecho, cualquier cambio que se produzca en los mismos.
                    </li>
                </ol>
                <p>
                    Con la firma del presente formulario, el proveedor/cliente/beneficiario de pago se compromete a cumplir con sus obligaciones derivadas de esta relación comercial de manera ética y profesional, observando íntegramente y en todo momento la legislación
                    aplicable, incluyendo, pero no limitado a: (i) Anti -Ley de corrupción de los Estados Unidos (Foreign Corrupt Practices Act -FCPA-) y cualquier otra legislación y / o regulación en materia anticorrupción que sea de aplicación en Colombia; (ii) Todas las leyes, reglamentos, códigos de práctica o conducta o pautas con respecto a la privacidad y tratamiento de los datos; y (iii) Todaslasleyes y regulaciones sobre control de exportaciones(incluidas las promulgadas o emitidas por las agencias del Gobierno de los Estados Unidos de América, incluidas, entre otras, las del Departamento de Comercio y Defensa de los Estados Unidos de América, que prohíbe la exportación o el desvío de mercancías a determinadas jurisdicciones prohibidas.
                </p>
                <p>
                    Las declaraciones y compromisos descritos en el presente formulario se extienden a BENKY y a quien asuma posiciones de contraparte y/o aliado en las operaciones que se ejecuten con base en esta vinculación.
                </p>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    Declaración origen de bienes y fondos
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <p>
                    El proveedor/cliente/beneficiario de pago declara bajo la gravedad de juramento que:
                </p>
                <ol>
                    <li>
                        Tanto su actividad, profesión u oficio es lícita y la ejerce dentro del marco legal y los recursos que posee no provienen de actividades ilícitas de las contempladas en el Código Penal Colombiano
                    </li>
                    <li>
                        La información que suministra en este documento es veraz y verificable y se compromete a mantenerla actualizada conforme sea requerida por la Compañía.
                    </li>
                    <li>
                        Los recursos que se deriven del desarrollo de este contrato no se destinarán a la financiación del terrorismo, grupos o actividades terroristas, ni armas de destrucción masiva
                    </li>
                    <li>
                        No admitirá que terceros efectúen depósitos en sus cuentas con fondos provenientes de las actividades ilícitas contempladas en el código Penal Colombiano o en cualquier otra norma que lo adicione; ni efectuará transacciones destinadas a tales actividades o a favor de personas relacionadas con las mismas.
                    </li>
                    <li>
                        Los recursos que posee provienen de las siguientes fuentes (detalle ocupacion, oficio, actividad o negocio):
                        <TextFields
                            sx={{mt:1}}
                            label="Detalle origen de los recursos"
                            name="origin_resources"
                            size="small"
                            error={errors.nombre}
                            control={control}
                            fullWidth    
                        />
                    </li>
                </ol>
                
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    Informacion de los Controladores Y Socios (O Accionistas) con el porcentaje de participación igual O superior al 5%
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        Tipo de identificación
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        No. Identificación
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        % de participación
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        Nombre y Apellidos o razón social
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        Es un PEP de conformidad con el Decrero 830 de 2021
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <DynamicTable control={control}  errors={errors} typePerson={typePerson}/>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    Identificación de personas expuestas politicamente - PEPs
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Es usted una persona políticamente expuesta o tiene relacionado con alguna políticamente expuesta  - PEP?"
                    name="is_pep"
                    fullWidth
                    control={control}
                    customOnchange={(value) => { setPep(value) }}
                />
            </Grid>
            {pep ? <><Grid item xs={12} >
                <CheckBoxYesNo
                    label="Maneja recursos públicos"
                    name="manage_public_resources"
                    control={control}
                    fullWidth
                />
            </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Detenta algún grado de poder público"
                        name="hold_public_office"
                        control={control}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Goza de reconocimiento público"
                        name="enjoy_public_recognition"
                        control={control}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Es usted un PEP de conformidad con el Decreto 830 de 2021?"
                        name="belong_pep"
                        control={control}
                        fullWidth
                        specify
                    />
                </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Es usted cónyuge o compañero permanente de un PEP?"
                        name="spouse_pep"
                        control={control}
                        fullWidth
                        specify
                    />
                </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Es usted familiar de un PEP hasta el segundo grado de consanguinidad?"
                        name="family_pep_second_degree"
                        control={control}
                        fullWidth
                        specify
                    />
                </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Es usted familiar de un PEP hasta el primer grado de afinidad?"
                        name="family_pep_first_degree"
                        control={control}
                        fullWidth
                        specify
                    />
                </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Es usted familiar de un PEP hasta el primer grado civil?"
                        name="family_pep_civil_degree"
                        control={control}
                        fullWidth
                        specify
                    />
                </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Tiene derecho, poder de firma o de otra índole sobre cuentas financieras en algún pais extranjero?"
                        name="power_sign_foreign_accounts"
                        control={control}
                        fullWidth
                        specify
                    />
                </Grid>
                <Grid item xs={12} >
                    <CheckBoxYesNo
                        label="Declaro que mis bienes y/o fondos provienen de actividades licitas"
                        name="declare_funds_legal"
                        control={control}
                        fullWidth
                        specify
                    />
                </Grid></> : null}
            <Grid item xs={12}>
                <Typography variant="h5" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    Identificación beneficiario final
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Realiza una transacción, operación o negocio a nombre de una persona natural?"
                    name="transaction_person"
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Actúa individual o conjuntamente ejerciendo control sobre una contraparte persona jurídica,
                conforme al artículo 260 y siguientes del Código de Comercio?"
                    name="control_legal_person"
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Actúa individual o conjuntamente, es titular, directa o indirectamente, del cinco por ciento (5
                    %) o más del capital o los derechos de voto de la persona jurídica, y/o se beneficia en un cinco
                    por ciento (5%) o más de los rendimientos, utilidades o Activos de la persona jurídica?"
                    name="benefit_legal_person"
                    control={control}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    En caso de ser afirmativa alguna de las preguntas anteriores, especifique los siguientes datos del beneficiario final, si se trata de una persona jurídica relacionar los datos del representante legal:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        Tipo de identificación
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        No. Identificación
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        Nombre y Apellidos
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant="subtitle1" fontWeight={600} mt={3} component="p" sx={{ color: "#002663" }}>
                                        ¿Es una Persona Expuesta Politicamente - PEP?
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <FinalBeneficiary control={control} errors={errors} watch={watch}/>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    Conflicto de intereses
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="El proveedor/cliente declara bajo la gravedad de juramento que no tiene algún conflicto de interés real o aparente con esta compañia"
                    name="conflictOfInterestDeclaration"
                    control={control}
                    error={errors.conflictOfInterestDeclaration}
                    fullWidth
                    specify
                />
            </Grid>
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Tiene conocimiento de alguna circunstancia que, represente o pueda representar una contraposición entre sus intereses personales, los de su cónyuge, compañero permanente, parientes en cuarto grado de consanguinidad,
                segundo de afinidad o primero civil, socios de hecho o de derecho, y los intereses de esta compañía"
                    name="personalInterestDisclosure"
                    control={control}
                    fullWidth
                    error={errors.personalInterestDisclosure}
                    specify
                />
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h4" fontWeight={600} mt={3} component="h3" sx={{ color: "#002663" }}>
                    Aviso de privacidad y autorización para el tratamiento de datos personales
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <p>
                    Los datos personales aquí recolectados serán almacenados, procesados, usados, compilados,transmitidos,transferidos, actualizados, dispuestos y tratados conforme la normatividad vigente y la Política de Tratamiento y Protección de Datos Personales de BENKY. Serán tratados conforme las siguientes finalidades:
                    (i) Para la ejecución de su objeto social principal, y de otros servicios y/o actividades conexas y complementarias.
                    (ii) Para el cumplimiento de las obligaciones y/o compromisos derivados de lasrelaciones con sus grupos de interés.
                    (iii) Para el cumplimiento de las obligaciones legales que involucren datos personales de sus grupos de interés.
                    (iv) Para la gestión comercial, actividades demercadeo y/o promoción de otros bienes y/o servicios propios o de terceros con los cualesse hayan celebrado alianzas o acuerdos comerciales y se comparta la información personal contenida en las bases de datos.
                    (v) Como elemento de análisis para hacer estudios de mercado o investigaciones comerciales o estadísticas.
                    (vi) Para consultar,solicitar y/o reportar la información financiera, comercial y crediticia a centrales de información de que trata la Ley 1266 de 2008, entre otras, en cualquier tiempo. Extendiendo las obligaciones de Habeas Data a quien asuma posiciones de contraparte y/o aliado en las operaciones que se ejecuten con base en esta vinculación.
                </p>

                <p>
                    Benky como responsable del tratamiento de los datos personales aquí consignados, en cumplimiento de la normatividad vigente,informa altitular de los datos personales que le asisten los siguientes derechos: acceder a sus datos personales; conocer, actualizar y rectificar sus datos personales;solicitar prueba de la autorización otorgada;revocar la autorización y/o solicitar la supresión del dato; presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a los dispuesto en la Ley 1581 de 2012.
                </p>
                <p>
                    Para el ejercicio del HabeasData, el titular del dato personal o quien demuestre un legítimo interés conforme lo señalado en la normatividad vigente,podrá hacerlo en el
                    correos.giraldo@benky.co o en nuestras oficinas ubicadas en la dirección 2020 N Academy Blvd, Ste 261 #2979 de la ciudad de Colorado Springs, Colorado 80909 US.
                </p>
                <p>
                    Con la firma del presente formulario autorizo de manera previa, expresa, voluntaria e informada a BENKY y a quien la represente o preste los servicios relacionados, para el tratamiento de mis datos personales.
                </p>
            </Grid>
            
            <Grid item xs={12} >
                <CheckBoxYesNo
                    label="Acepta terminos y condiciones?"
                    name="terms_conditions"
                    error={errors.terms_conditions}
                    control={control}
                    fullWidth
                />
            </Grid>

            {typePerson == "Persona Natural" || typePerson == "Persona Jurídica" ? <Grid item xs={12}>
                    <Typography variant="h4" fontWeight={600} component="h3" sx={{ color: "#002663" }}>
                        Adjuntar los siguientes documentos:
                    </Typography>
                </Grid>
            : null}

            {typePerson == "Persona Natural" ? <><Grid item xs={12}>
                <InputFile
                    label="Copia del documento de identidad"
                    name="document_identity"
                    size="small"
                    sxRow={{ marginBottom: "1rem" }}
                    error={errors.document_identity}
                    control={control}
                    fullWidth
                    type="file"
                />
            </Grid>
                <Grid item xs={12}>
                    <InputFile
                        label="Estados Financieros del último año o Declaración de renta"
                        name="financial_statements"
                        size="small"
                        error={errors.financial_statements}
                        sxRow={{ marginBottom: "1rem" }}
                        control={control}
                        fullWidth
                        type="file"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputFile
                        label="RUT (En caso de ser persona natural comerciante)."
                        name="rut"
                        size="small"
                        error={errors.rut}
                        control={control}
                        sxRow={{ marginBottom: "1rem" }}
                        fullWidth
                        type="file"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputFile
                        label="Certificado Bancario vigente."
                        name="bank_certificate"
                        size="small"
                        error={errors.bank_certificate}
                        sxRow={{ marginBottom: "1rem" }}
                        control={control}
                        fullWidth
                        type="file"
                    />
                </Grid>
            </> : null}

            {typePerson == "Persona Jurídica"  ? <><Grid item xs={12}>
                
                <InputFile
                    label="Certificado de existencia y representación legal con vigencia no superior a 30 días"
                    name="existence_certificate"
                    size="small"
                    sxRow={{ marginBottom: "1rem" }}
                    error={errors.existence_certificate}
                    control={control}
                    fullWidth
                    type="file"
                />
            </Grid>
                <Grid item xs={12}>
                    <InputFile
                        label="Certificado de composición accionaria suscrito por el representante legal o el revisor fiscal donde se indique información de socios o accionistas con el 5% o más del capital social"
                        name="composition_certificate_legal_representative"
                        size="small"
                        error={errors.composition_certificate_legal_representative}
                        sxRow={{ marginBottom: "1rem" }}
                        control={control}
                        fullWidth
                        type="file"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputFile
                        label="Copia del RUT."
                        name="rut"
                        size="small"
                        error={errors.rut}
                        control={control}
                        sxRow={{ marginBottom: "1rem" }}
                        fullWidth
                        type="file"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputFile
                        label="Copia del DI del representante legal."
                        name="di_legal_representative"
                        size="small"
                        error={errors.di_legal_representative}
                        sxRow={{ marginBottom: "1rem" }}
                        control={control}
                        fullWidth
                        type="file"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputFile
                        label="Estados financieros del último año."
                        name="states_financial"
                        size="small"
                        error={errors.states_financial}
                        control={control}
                        fullWidth
                        type="file"
                    />
                </Grid>
            </> : null}
        </Grid>

    );
}
