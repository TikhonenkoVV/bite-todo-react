import { LoaderBackdrop, Spiner } from './Loader.styled';

export const Loader = ({ fill }) => {
  return (
    <LoaderBackdrop>
      <Spiner fill={fill}>
        <path
          d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3   c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
          id="path2"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="2s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5   L82,35.7z"
          id="path6"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
        <path
          id="path904"
          d="m 52.005163,29.369547 c -0.912322,0.0034 -3.622351,0.174022 -4.098626,0.275062 -3.143049,0.666782 -4.486424,1.229024 -5.412606,2.265491 -0.344892,0.38596 -1.175725,1.307518 -1.84638,2.047888 -1.235682,1.364136 -1.781668,2.24986 -1.9672,3.191735 -0.06967,0.353712 -0.129395,0.393562 -1.916673,1.272414 -2.45902,1.209168 -2.790993,1.428881 -3.080896,2.040754 -0.814001,1.718057 -0.848112,1.751383 -2.12042,2.06643 -1.243629,0.307948 -1.536141,0.476523 -3.689497,2.125514 -1.089648,0.834429 -1.330444,1.549179 -0.79014,2.345362 0.276003,0.406716 0.54301,1.395411 0.680115,2.518547 0.185792,1.521966 1.266907,2.941868 2.764882,3.631222 0.97372,0.448098 1.015929,0.432959 0.652202,-0.235329 -0.404227,-0.742696 -0.375088,-0.918048 0.165852,-1.001836 0.969198,-0.150119 2.066351,-0.508569 3.24471,-1.060107 1.38486,-0.648191 1.299588,-0.664124 1.720259,0.323755 0.169996,0.399215 0.536536,1.026273 0.81459,1.393446 0.759425,1.00281 0.741152,0.963484 0.514671,1.099228 -0.109784,0.06581 -0.504276,0.32373 -0.876531,0.573148 -2.316966,1.552388 -4.073579,2.245716 -4.676255,1.845562 -0.712577,-0.473127 -0.692684,-0.498543 -0.452935,0.577426 0.711072,3.191215 2.281365,4.665425 4.992067,4.686439 0.02116,2.09e-4 0.01664,0.457909 -0.01,1.017326 -0.289434,6.486955 3.574253,9.126392 12.565029,8.014689 0,0 -1.165519,-1.739872 -0.0758,-2.981264 0.478473,-0.545069 0.966145,-1.108394 1.083743,-1.251837 0.213743,-0.260799 1.128704,1.639292 1.132253,2.558187 0.963197,2.720943 5.047675,1.686382 5.047675,1.686382 -1.550316,-0.619356 -3.150746,-3.610541 -0.169314,-5.863564 0.229506,-0.16807 1.285835,-1.1753 2.347398,-2.238184 1.842065,-1.844361 2.215496,-2.167174 3.737174,-3.229635 0.735736,-0.513706 0.682153,-0.615024 -0.503467,-0.95192 -0.679405,-0.193056 -0.700847,-0.256688 -0.194579,-0.578644 1.429723,-0.90924 4.546326,-1.209397 6.838241,-0.658726 1.263597,0.303617 1.429428,0.319026 3.029959,0.28362 2.13109,-0.04716 2.175471,-0.09179 0.833742,-0.837205 -3.151274,-1.750734 -4.88912,-5.13028 -4.79239,-9.319302 0.04166,-1.803891 0.0246,-2.138662 -0.123679,-2.425433 -0.128913,-0.24931 -0.13864,-0.332728 -0.03891,-0.332519 0.389132,7.93e-4 3.270833,0.329614 3.966803,0.45273 0.44466,0.07865 0.808477,0.12145 0.808477,0.09515 0,-2.745581 -8.084518,-10.59569 -12.179332,-11.826232 -0.935595,-0.281157 -0.937886,-0.260269 0.09577,-0.938878 0.998412,-0.655475 2.081418,-1.503925 2.073967,-1.624903 -0.02161,-0.350647 -2.273174,-0.657189 -5.990033,-0.815405 -2.058083,-0.08761 -3.771515,-0.177398 -3.807671,-0.199674 -0.02004,-0.01236 -0.127304,-0.01753 -0.296252,-0.01691 z m -1.75999,1.417485 c 0.205306,0.0016 0.390815,0.01508 0.551143,0.04218 0.217923,0.03683 0.631014,0.106736 0.917892,0.155461 0.286877,0.04873 0.780098,0.184854 1.096172,0.302365 0.316078,0.11751 0.960748,0.274372 1.432563,0.348614 0.927799,0.145986 0.963611,0.207341 0.225348,0.385902 -0.919976,0.222505 -2.206833,0.89429 -2.646096,1.381422 -0.465222,0.515919 -0.332508,0.597526 0.993686,0.611247 0.365175,0.004 1.196339,0.184799 2.242875,0.488391 0.914484,0.265286 2.117654,0.614216 2.673602,0.775468 1.602739,0.464875 2.207618,0.8516 3.735747,2.388557 1.864764,1.875531 2.063276,2.195399 1.362678,2.195399 -0.794933,0 -3.655961,0.917732 -4.157307,1.333543 -0.378422,0.313866 -0.511808,0.155953 1.633869,1.93562 1.663278,1.379551 2.648194,2.544435 3.042998,3.599641 1.061809,2.83795 1.003824,4.64825 -0.229422,7.171986 -0.492822,1.008518 -0.509611,0.997758 -0.865733,-0.552161 -0.366474,-1.594999 -1.397186,-3.663171 -2.639167,-5.295657 -0.49391,-0.649206 -1.678887,-1.370235 -2.685827,-1.634273 -1.027219,-0.269351 -1.044981,-0.258963 -0.593113,0.352486 0.712033,0.963497 1.372301,2.116301 1.544422,2.696421 0.09196,0.309944 0.288064,0.79829 0.435818,1.085172 0.464888,0.902627 0.252297,3.193513 -0.464753,5.007347 -0.09072,0.229503 -0.200099,0.727352 -0.243072,1.10636 -0.124689,1.099634 -0.577178,1.976673 -0.667076,1.292993 -0.284525,-2.163766 -0.350766,-2.423711 -0.775266,-3.043814 -0.866654,-1.265987 -2.273279,-2.078384 -1.890592,-1.091893 1.087734,2.803921 0.975565,4.127194 -0.545437,6.432167 -0.378126,0.573025 -0.731862,1.181107 -0.786067,1.351471 -0.185244,0.58217 -2.81685,-2.222632 -4.080288,-4.349032 -1.559772,-2.625143 -2.761349,-6.553295 -2.476983,-8.097208 0.03867,-0.20995 0.110845,-1.015566 0.160555,-1.790146 0.29129,-4.538673 0.59436,-5.192601 1.984113,-4.28322 0.08606,0.05631 0.502058,0.249177 0.924615,0.428483 0.422553,0.179302 1.056301,0.538109 1.408317,0.797477 0.753965,0.555525 0.831126,0.473762 0.446211,-0.473513 -0.664684,-1.635802 -3.489571,-4.261939 -4.913215,-4.567656 -1.082289,-0.232424 -2.563254,-0.13948 -2.559707,0.160756 4.39e-4,0.03383 0.325871,0.238737 0.723313,0.455176 0.769987,0.419323 1.310291,0.99097 1.473107,1.558685 0.348142,1.213887 -1.638033,3.869671 -3.370627,4.50694 -0.272534,0.10024 -0.495518,0.197309 -0.495518,0.215564 0,0.04834 1.611494,2.228589 1.984724,2.685216 1.278438,1.564107 1.190558,4.005825 -0.177671,4.935223 -1.682212,1.142681 -4.918056,4.379167 -5.845369,5.846592 -0.2584,0.408998 -0.326086,0.45508 -0.603913,0.411368 -0.172127,-0.02709 -0.849787,-0.127573 -1.50571,-0.223513 -1.133785,-0.165839 -1.213881,-0.194033 -1.624291,-0.572333 -0.369909,-0.340968 -1.083293,-1.425647 -0.974941,-1.482277 0.02004,-0.01049 0.361499,-0.183454 0.758763,-0.384273 0.397268,-0.200809 0.994261,-0.539239 1.326817,-0.752037 0.332558,-0.212796 0.758634,-0.465974 0.946825,-0.562758 0.188192,-0.09678 0.600488,-0.372839 0.916057,-0.613287 0.315564,-0.24045 0.808479,-0.56965 1.095358,-0.731663 2.051264,-1.158433 2.112075,-1.297313 1.060312,-2.421562 -0.805794,-0.861327 -1.608044,-2.088119 -2.219851,-3.394671 -0.258782,-0.552641 -0.524442,-0.520042 -2.275272,0.278729 -4.299943,1.961728 -5.722019,1.88337 -5.949282,-0.328037 -0.06672,-0.649271 -0.06669,-0.649339 0.382438,-0.76243 0.526414,-0.132552 1.64285,-1.085759 1.471887,-1.256727 -0.05673,-0.05673 -0.333875,-0.142503 -0.615935,-0.190507 -0.522393,-0.0889 -1.71655,-0.593481 -1.707828,-0.721681 0.0066,-0.0969 1.390773,-1.156626 2.029549,-1.553792 0.357126,-0.22205 0.866997,-0.398107 1.616956,-0.558272 0.910237,-0.194399 1.140659,-0.283952 1.363695,-0.530566 0.40295,-0.445547 1.484948,-0.441218 1.965775,0.008 0.200598,0.187381 0.526848,0.347806 0.846987,0.416465 0.286415,0.06142 0.690092,0.182456 0.897109,0.26895 0.986589,0.412226 2.121209,-0.610117 1.662188,-1.497766 -0.49238,-0.952157 -1.716124,-1.602001 -2.495524,-1.325185 -1.420205,0.504413 -1.794475,0.53799 -1.646092,0.147717 0.161631,-0.425121 0.450867,-0.607147 2.830489,-1.782399 1.76272,-0.870573 2.392928,-1.416255 2.403021,-2.080691 0.0064,-0.423034 0.652784,-1.505422 1.322742,-2.214959 0.924266,-0.978869 1.23405,-0.937127 0.81133,0.109413 -0.270928,0.670751 -0.527688,2.049239 -0.415444,2.230852 0.04035,0.0653 0.364752,-0.168018 0.787084,-0.566426 0.98981,-0.933751 2.437449,-1.882525 3.801762,-2.491667 1.586781,-0.708477 1.558859,-1.05698 -0.07151,-0.801961 -4.045958,0.632862 -0.05352,-1.059936 -0.719748,-1.021629 -0.66631,0.03833 -0.912054,-0.0635 -1.892728,0.569103 -0.498658,0.321666 -0.621977,0.01613 -0.1793,-0.44438 0.892281,-0.928252 4.730146,-2.039708 6.714768,-2.024861 z m -4.048299,24.296721 c 0.06652,-0.0019 0.129403,0.239478 0.137736,0.634885 0.0042,0.200814 0.142478,0.695587 0.307049,1.099433 0.164578,0.403843 0.350156,0.971646 0.412389,1.26182 0.252119,1.175583 0.822411,2.233786 2.733097,5.071527 0.489245,0.726622 0.425156,0.741247 -0.491852,0.112473 -1.729061,-1.185586 -2.937491,-1.565643 -2.877758,-0.905057 0.163173,1.804514 0.680804,4.01936 1.034843,4.427684 0.12438,0.143447 0.114148,0.204737 -0.07355,0.443359 -0.119793,0.152294 -0.249632,0.270735 -0.288508,0.263244 -0.03887,-0.0074 -0.281742,-0.07397 -0.539935,-0.147926 -0.258191,-0.07395 -0.950424,-0.06851 -1.151238,-0.07368 -0.875718,-0.02259 -1.550586,-0.13057 -2.274093,-0.503701 l -1.15235,-0.787811 c 0.601212,1.362355 0.63529,1.219523 1.740465,1.945056 0.79318,0.520725 0.793258,0.520627 -0.03647,0.509783 -0.456351,-0.006 -1.167156,-0.09262 -1.57967,-0.19254 -1.77535,-0.43003 -2.727725,-2.077176 -2.616754,-4.526298 0.558241,-3.732201 1.418673,-1.583169 1.676644,-0.920885 l 1.051995,0.785647 c -0.300505,-0.748492 -0.353955,-1.071576 -0.532424,-1.785509 -0.285198,-0.780579 -0.139299,-2.197835 0.324776,-3.155673 0.472635,-0.975503 0.620438,-0.997863 0.689489,-0.104319 0.0731,0.945924 0.296846,1.269903 1.147925,1.662191 0.859927,0.396368 0.833946,0.398096 0.833946,-0.05623 0,-0.534371 0.24867,-1.444178 0.839856,-3.072545 0.282426,-0.777913 0.545398,-1.573754 0.584354,-1.768544 0.02951,-0.147547 0.0652,-0.215335 0.100041,-0.216384 z"
        />
      </Spiner>
    </LoaderBackdrop>
  );
};
